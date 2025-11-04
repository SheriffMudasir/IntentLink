<!-- PROJECT BANNER -->
<p align="center">
  <a href="https://github.com/SheriffMudasir/IntentLink">
    <img src="assets/banner.png" width="100%" alt="IntentLink Banner">
  </a>
</p>

<br />

<h1 align="center">🚀 IntentLink</h1>
<h3 align="center">Your AI Copilot for Secure DeFi Transactions on BlockDAG</h3>

<p align="center">
  <!-- GitHub Badges -->
  <a href="https://github.com/SheriffMudasir/IntentLink/stargazers">
    <img src="https://img.shields.io/github/stars/SheriffMudasir/IntentLink?style=for-the-badge&logo=github" />
  </a>
  <a href="https://github.com/SheriffMudasir/IntentLink/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/SheriffMudasir/IntentLink?style=for-the-badge" />
  </a>
  <!-- Project Badges -->
  <a href="https://awakening.bdagscan.com">
    <img src="https://img.shields.io/badge/Chain-BlockDAG%20Testnet-blue?style=for-the-badge&logo=ethereum" />
  </a>
  <img src="https://img.shields.io/badge/Status-Wave%201%20Complete-brightgreen?style=for-the-badge" />
</p>

---

## 🎯 The Problem: DeFi is Powerful, but Dangerously Complex

Interacting with DeFi involves navigating a maze of disjointed interfaces, technical jargon (gas, slippage, approvals), and a constant threat of scams or contract exploits. A simple goal like "move my assets to the best-yielding farm" can require 5-10 manual, error-prone steps, exposing users to significant financial risk.

## ✨ Our Solution: IntentLink

> IntentLink is a **secure, AI-driven execution layer** that translates your natural language goals into safe, optimized on-chain transactions. We replace the complex multi-step process with a single, verifiable "intent."

Simply state what you want to do. Our backend pipeline does the heavy lifting:

1.  **Parses** your intent into a machine-readable format.
2.  **Plans** the optimal transaction path, vetting all contracts with **DAGScanner**.
3.  **Simulates** the entire plan on a fork of the BlockDAG network to guarantee success.
4.  **Presents** a clear, human-readable summary for your final, single-signature approval.

**IntentLink = 🧠 AI Planner + 🛡️ Simulation Engine + ⚔️🛡️ Security-First by DAGScanner + ⚡ Ultra-fast BlockDAG Execution**

---

## 🔑 Key Features

- 🗣️ **Natural Language Input:** Just say what you want, like "Swap 500 BDAG for USDC and lend it on the top protocol."
- 🔒 **Security-First Pipeline:** Every transaction is simulated and every contract is vetted by DAGScanner _before_ you sign anything.
- ⛽️ **Gas Abstraction:** The IntentLink relayer handles gas fees, simplifying the user experience.
- 📦 **Atomic Execution:** Multi-step plans are bundled into a single transaction. If one step fails, the entire operation reverts, preventing lost funds.
- 🧾 **On-Chain Audits:** Every executed intent generates an on-chain receipt with a link to an IPFS artifact containing the full plan and simulation logs.

---

## 🏗️ System Architecture

Our architecture is a robust, three-layer system designed for security and scalability.

```mermaid
graph TD
    subgraph User
        A[Browser: Next.js UI]
    end

    subgraph Backend Services
        B[API Server: Django-Ninja]
        C[Task Queue: Celery + Redis]
        D[Simulation Worker]
        E[Relayer Worker]
        F[Database: PostgreSQL]
    end

    subgraph External Services
        G[DAGScanner API]
        H[IPFS]
        I[LLM API]
    end

    subgraph Blockchain
        J[BlockDAG Testnet]
        K[IntentWallet Contract]
    end

    A -- "1. POST /parse-intent" --> B
    B -- "2. Parse" --> I
    B -- "3. Plan & Analyze" --> G
    B -- "4. Save Intent/Plan" --> F
    B -- "5. Enqueue Simulation" --> C
    C -- "6. Dispatch" --> D
    D -- "7. Fork & Simulate" --> J
    D -- "8. Store Result" --> F
    A -- "9. User Signs Plan" --> B
    B -- "10. Verify & Enqueue Execution" --> C
    C -- "11. Dispatch" --> E
    E -- "12. Execute Batch Tx" --> K
    K -- "13. State Change" --> J
    E -- "14. Upload Proof" --> H
    E -- "15. Write Receipt" --> K
```
