import { useState } from 'react';
import { apiService, Candidate } from '@/lib/api';
import { toast } from 'sonner';

export type IntentStatus = 'idle' | 'parsing' | 'planning' | 'review' | 'executing' | 'success' | 'error';

export function useIntent() {
    const [status, setStatus] = useState<IntentStatus>('idle');
    const [intentId, setIntentId] = useState<string | null>(null);
    const [planId, setPlanId] = useState<string | null>(null);
    const [chosenCandidate, setChosenCandidate] = useState<Candidate | null>(null);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [logs, setLogs] = useState<string[]>([]);

    const processIntent = async (input: string, userWallet: string = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", chainId: number = 1043) => {
        try {
            setStatus('parsing');

            // 1. Parse
            const parseRes = await apiService.parseIntent({
                input,
                user_wallet: userWallet,
                chain_id: chainId
            });

            if (parseRes.status === 'clarify') {
                toast.info("Please clarify your intent.");
                setStatus('idle');
                return;
            }

            setIntentId(parseRes.intent_id);
            setStatus('planning');

            // 2. Plan
            const planRes = await apiService.getPlan({ intent_id: parseRes.intent_id });
            setPlanId(planRes.plan_id);
            setChosenCandidate(planRes.chosen);
            setStatus('review'); // Stop here to show the user the plan

        } catch (error) {
            console.error(error);
            setStatus('error');
            toast.error("Failed to process intent. Is the backend running?");
        }
    };

    const confirmExecution = async () => {
        if (!planId) return;

        try {
            setStatus('executing');

            // 3. Submit
            const submitRes = await apiService.submitIntent({ plan_id: planId });
            const executionId = submitRes.execution_id;

            // 4. Poll
            const pollInterval = setInterval(async () => {
                try {
                    const statusRes = await apiService.getExecutionStatus(executionId);

                    if (statusRes.status === 'confirmed') {
                        clearInterval(pollInterval);
                        setTxHash(statusRes.tx_hash);
                        setLogs(statusRes.logs);
                        setStatus('success');
                        toast.success("Intent executed successfully!");
                    } else if (statusRes.status === 'failed') {
                        clearInterval(pollInterval);
                        setStatus('error');
                        toast.error("Execution failed on-chain.");
                    }
                } catch (e) {
                    console.error("Polling error", e);
                }
            }, 2000);

        } catch (error) {
            console.error(error);
            setStatus('error');
            toast.error("Failed to submit execution.");
        }
    };

    const reset = () => {
        setStatus('idle');
        setIntentId(null);
        setPlanId(null);
        setChosenCandidate(null);
        setTxHash(null);
        setLogs([]);
    };

    return {
        status,
        chosenCandidate,
        txHash,
        logs,
        processIntent,
        confirmExecution,
        reset
    };
}
