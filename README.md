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
graph LR
    classDef user fill:#2471A3,color:#FFFFFF,stroke:#1B4F72,stroke-width:2px
    classDef backend fill:#229954,color:#FFFFFF,stroke:#196F3D,stroke-width:2px
    classDef external fill:#D4AC0D,color:#000000,stroke:#B7950B,stroke-width:2px
    classDef blockchain fill:#7D3C98,color:#FFFFFF,stroke:#512E5F,stroke-width:2px

    subgraph User
        UI[<b>Next.js Frontend</b>]
    end
    class UI user

    subgraph "Backend (IntentLink Server)"
        API["<b>API Server</b><br/>Django-Ninja"]
        Async["<b>Async Workers</b><br/>Celery & Redis<br/>Simulation & Relayer"]
        DB[(<b>PostgreSQL</b>)]
    end
    class API,Async,DB backend

    subgraph "External Services"
        LLM[<b>LLM API</b>]
        DAGScanner[<b>DAGScanner API</b>]
        IPFS[<b>IPFS Storage</b>]
    end
    class LLM,DAGScanner,IPFS external

    subgraph "BlockDAG Network"
        Wallet[<b>IntentWallet Contract</b>]
        Testnet[<b>Awakening Testnet</b>]
    end
    class Wallet,Testnet blockchain

    %% --- Main Flows ---
    UI -- "1. User Intent" --> API
    
    API -- "2. Parse & Plan" --> LLM
    API -- "3. Analyze Contracts" --> DAGScanner
    API -- "4. Persist State" --> DB

    API -. "5. Enqueue Simulation" .-> Async
    Async -- "6. Fork & Simulate" --> Testnet
    Async -- "7. Update Result" --> DB

    UI -- "8. Signed Plan" --> API
    API -. "9. Enqueue Execution" .-> Async

    Async -- "10. Submit Tx Bundle" --> Wallet
    Wallet -- "11. Executes on" --> Testnet
    Async -- "12. Store Artifact" --> IPFS
```
