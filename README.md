<!-- PROJECT BANNER -->
<p align="center">
  <a href="https://github.com/SheriffMudasir/IntentLink">
    <img src="assets/banner.png" width="100%" alt="IntentLink Banner">
  </a>
</p>

<br />

<h1 align="center">🚀 IntentLink</h1>
<h3 align="center">The Intent-Centric Execution Layer for BlockDAG</h3>
<p align="center"><b>Speed of BlockDAG ⚡️ + Safety of GoPlus 🛡️</b></p>

<p align="center">
  <!-- GitHub Badges -->
  <a href="https://github.com/SheriffMudasir/IntentLink/stargazers">
    <img src="https://img.shields.io/github/stars/SheriffMudasir/IntentLink?style=for-the-badge&logo=github" />
  </a>
  <a href="https://github.com/SheriffMudasir/IntentLink/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/SheriffMudasir/IntentLink?style=for-the-badge" />
  </a>
  <!-- Project Badges -->
  <a href="https://blockdag.network/hackathon">
    <img src="https://img.shields.io/badge/Track-DeFi%20Speedway-purple?style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/badge/Status-Wave%202%20(MVP%20Complete)-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Security-GoPlus%20Integrated-blue?style=for-the-badge" />
</p>

---

## 📺 **Wave 2 Demo Video**
**[Click here to watch the End-to-End Demo (Parse → Plan → Execute)](https://youtu.be/dRfsjRN5FBg)**  
*(Demonstrating live backend integration, GoPlus security checks, and BlockDAG testnet simulation)*

---

## 🎯 The Problem: DeFi is Too Hard & Too Risky

For mass adoption, DeFi needs to stop acting like a command line and start acting like a concierge. Currently, a user wanting to "Earn yield on BlockDAG" faces a maze:
1.  Find a protocol (High risk of phishing).
2.  Check contract safety (Manual, error-prone).
3.  Approve tokens (Gas cost).
4.  Stake tokens (Gas cost).
5.  Repeat for every chain.

**The Complexity Gap:** Users want **outcomes** (Yield, Swaps), but Blockchains require **steps** (Call data, nonces, gas).

## ✨ The Solution: IntentLink

IntentLink is a **secure, multi-chain intent execution layer**. We decouple the *what* (User Intent) from the *how* (Transaction Execution).

1.  **User:** "Stake 1000 BDAG in the safest farm."
2.  **IntentLink:** Parses the intent, scans 50+ protocols, validates security via **GoPlus**, and constructs a transaction bundle.
3.  **User:** Signs **one** object.
4.  **BlockDAG:** Executes the bundle instantly via Account Abstraction.

---

## 🧱 Scalability & Architecture (Why we win)

We addressed the scalability concerns by adopting a hybrid **Off-Chain Solving / On-Chain Settlement** model.

### 1. The "Speed + Safety" Stack
*   **Execution:** Built on **BlockDAG** to leverage its **2-second finality**. Intents expire quickly; BlockDAG ensures they settle before market conditions change.
*   **Security:** Integrated **GoPlus Security API** (Token & Address Security). We replaced our custom crawler with the industry standard to ensure we can scale to millions of contracts immediately.
*   **Throughput:** The Intent Engine runs off-chain using **Celery & Redis** worker queues, allowing us to process thousands of intents per second without clogging the network.

### 2. System Architecture

```mermaid
graph LR
    classDef user fill:#2471A3,color:#FFFFFF,stroke:#1B4F72,stroke-width:2px
    classDef backend fill:#229954,color:#FFFFFF,stroke:#196F3D,stroke-width:2px
    classDef external fill:#D4AC0D,color:#000000,stroke:#B7950B,stroke-width:2px
    classDef blockchain fill:#7D3C98,color:#FFFFFF,stroke:#512E5F,stroke-width:2px

    subgraph User
        UI[<b>Next.js Frontend</b><br/>Multi-Chain Wallet]
    end
    class UI user

    subgraph "IntentLink Backend (Microservices)"
        API["<b>API Gateway</b><br/>Django-Ninja"]
        Planner["<b>Intent Planner</b><br/>Pathfinding Algorithm"]
        Security["<b>Security Service</b><br/>GoPlus Integration"]
        Async["<b>Async Relayer</b><br/>Celery & Redis"]
    end
    class API,Planner,Security,Async backend

    subgraph "External Oracle"
        GoPlus[<b>GoPlus Security API</b><br/>Token/Address Reputation]
    end
    class GoPlus external

    subgraph "Blockchain Networks"
        BDAG[<b>BlockDAG Testnet</b><br/>Chain ID: 1043]
        POLY[<b>Polygon Amoy</b><br/>Chain ID: 80002]
    end
    class BDAG,POLY blockchain

    %% --- Main Flows ---
    UI -- "1. Natural Language" --> API
    API -- "2. Resolve Intent" --> Planner
    Planner -- "3. Risk Check" --> Security
    Security -- "4. Validate" --> GoPlus
    
    Planner -. "5. Safe Plan" .-> UI
    UI -- "6. Signed Intent" --> API
    API -. "7. Queue Job" .-> Async

    Async -- "8. Execute Batch" --> BDAG
    Async -- "9. Execute Batch" --> POLY
```

---

## ✅ Wave 2 Progress Report

We have successfully transitioned from "Ideation" to a functional **MVP**.

| Component | Status | Details |
| :--- | :--- | :--- |
| **Backend API** | 🟢 **Live** | Django-Ninja API is handling requests. Dockerized & stable. |
| **Security Engine** | 🟢 **Live** | **GoPlus Integrated.** Checks Token Security (Honeypots) & Malicious Deployers. |
| **Intent Planner** | 🟢 **Live** | Resolves intents to whitelisted BlockDAG contracts (DEX/Farms). |
| **Execution Engine** | 🟢 **Live** | Celery workers simulating on-chain state changes (Pending -> Confirmed). |
| **Frontend** | 🟢 **Live** | Connected to Backend. User can Connect Wallet -> Parse -> Plan -> Execute. |
| **Multi-Chain** | 🟡 **In Progress** | Architecture ready. Awaiting Polygon Amoy contract deployment. |

---

## 🛠 Tech Stack

-   **Backend:** Python (Django 4.x), Django-Ninja (Typed API)
-   **Async Task Queue:** Celery + Redis (for high-volume intent processing)
-   **Database:** PostgreSQL
-   **Security Oracle:** **GoPlus Security API**
-   **Frontend:** Next.js, Tailwind, Thunder Client (Testing)
-   **Blockchain:** BlockDAG Awakening Testnet, Solidity

---

## 🚀 Getting Started (Local Dev)

This project is a monorepo. To run the backend engine:

### **Backend Setup**

1.  Navigate to the backend:
    ```bash
    cd intentlink-backend
    ```
2.  Configure Environment:
    ```bash
    cp .env.example .env
    # Add your GOPLUS_API_KEY and BLOCKDAG_RPC_URL
    ```
3.  Launch via Docker:
    ```bash
    docker-compose up --build -d
    ```
4.  Access API Docs:
    Open `http://localhost:8000/api/docs` to see the Swagger UI.

---

## 🔮 Roadmap (Wave 3 & Beyond)

*   **Wave 3:** Full Multi-Chain deployment (Polygon integration) and Live Relayer (sending real transactions).
*   **Wave 4:** AI-Agent integration (Google Agent Dev Kit) for complex reasoning.
*   **Wave 5:** Audits and Adjustments.
*   **Wave 6:** Polishing and prove.


---

<p align="center">Built with ❤️ for the BlockDAG Ecosystem.</p>
