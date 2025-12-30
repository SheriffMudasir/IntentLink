<!-- PROJECT BANNER -->
<p align="center">
  <a href="https://github.com/SheriffMudasir/IntentLink">
    <img src="assets/banner.png" width="100%" alt="IntentLink Banner">
  </a>
</p>

<br />

<h1 align="center">🚀 IntentLink</h1>
<h3 align="center">The Gasless AI Trading Wallet for BlockDAG</h3>
<p align="center"><b>Real Yield 💰 + Lightning Speed ⚡️ + GoPlus Security 🛡️</b></p>

<p align="center">
  <a href="https://blockdag.network/hackathon">
    <img src="https://img.shields.io/badge/Track-DeFi%20Speedway-purple?style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/badge/Status-Wave%204%20(Real%20DeFi%20Live)-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Primitive-Yield%20Vault%20V4-orange?style=for-the-badge" />
</p>

---

## 🌊 Wave 4 Update: "Speed & Depth"
In Wave 4, we transformed IntentLink from a "Developer Demo" into a **Consumer DeFi Product**. We addressed the feedback on UX and realism by deploying a flagship DeFi primitive and visualizing BlockDAG's speed.

### **1. The "Hero" Primitive: IntentYieldVault**
We built a sophisticated, native staking primitive running on BlockDAG L1.
*   **Time-Lock Multipliers:** Smart contract logic that rewards long-term conviction (7 Days = 1.5x, 30 Days = 3x APY).
*   **Auto-Compounding:** Users can claim and restake rewards in a single, gasless click via our Relayer.
*   **Real ERC-20 Logic:** Moved away from "counters" to real `transferFrom` settlement using standard tokens.

### **2. Visualizing Speed (The "Speedometer")**
To prove the "Sub-2 Second" requirement, we added a real-time **Execution Timer** to the UI.
*   **Result:** Users see their intents settle in **~1,200ms** on BlockDAG.
*   **Impact:** Visually demonstrates why BlockDAG is superior to legacy chains for high-frequency intents.

### **3. The "Robinhood" Dashboard**
We overhauled the UX to focus on **Value**.
*   **Real-Time Portfolio:** Users see their staked balance and pending rewards ticking up live.
*   **Action Cards:** "One-Tap" execution for complex strategies (e.g., "Maximize Yield").
*   **Transparency:** Visual "Security Scan" progress bar showing GoPlus checks in real-time.

---

## 📺 **Demo Video (Wave 4)**
**[Watch the "Speed & Depth" Demo](https://youtu.be/UUY1QVthta4)**
*(Featuring: 30-Day Lock Staking, Auto-Compounding, and the <2s Transaction Timer)*

---

## ⛓️ Deployed Contracts (Verified)

We have deployed our V4 infrastructure to both BlockDAG and Polygon Amoy to demonstrate multi-chain parity.

### **BlockDAG Awakening Testnet (Chain ID: 1043)**
| Contract | Address | Features |
| :--- | :--- | :--- |
| **IntentWalletV2** | `0xe3dad1813a5c75fba505780a386a81fd3b8777e4` | Portfolio Aggregator, Relayer Auth |
| **IntentYieldVault** | `0xfd40a1fc236610ed46c0e33ad39fbd50f6421b7e` | **Locking, Compounding, Real Yield** |
| **MockUSDT** | `0x3a06d4bb208bddb40044630f2b269449e9119c4d` | Standard ERC-20 |

### **Polygon Amoy Testnet (Chain ID: 80002)**
| Contract | Address | Features |
| :--- | :--- | :--- |
| **IntentWalletV2** | `0x0881a837699208342675591b48910e3f5cfd951d` | Multi-Chain Identity |
| **IntentYieldVault** | `0x11adda847322b37260553ba9233234679bb09893` | Identical Logic to BlockDAG |

*All contracts are verified on explorers with visible source code.*

---

## 🛠️ Technical Deep Dive

### **1. The "Real DeFi" Flow (V4 Architecture)**
Unlike simple demos that update a number, IntentLink V4 executes a legitimate DeFi settlement flow:
1.  **Parse:** AI converts "Stake 1000 USDT" -> `LockType: 2` (30 Days).
2.  **Approve:** Relayer generates `approve()` calldata for the User -> Wallet.
3.  **Pull:** Wallet executes `transferFrom` (User -> Wallet).
4.  **Stake:** Wallet executes `stakeFor` (Wallet -> Vault) with the User as the beneficiary.
5.  **Lock:** Vault locks tokens for 30 days and applies 3x Multiplier to reward tracking.

### **2. Security & Scalability**
*   **GoPlus Integration:** Before generating the plan, we scan the Token and the Vault Deployer address for honeypots/malicious flags.
*   **EIP-712:** We use `eth_signTypedData_v4` to ensure the user sees exactly what they are signing (Chain ID, Nonce, Expiry, Plan Hash).
*   **Relayer Whitelist:** Only our authenticated backend can trigger the `IntentWallet`, preventing spam attacks.

---

## 🚀 How to Test (Judges)

1.  **Connect:** Visit the [Live Link] and connect MetaMask (BlockDAG Testnet).
2.  **Mint:** Use the "Mint Demo Tokens" button (calls `MockUSDT.mint`).
3.  **Execute:** Type **"Stake 1000 USDT"** or click the **"Maximize Yield"** card.
4.  **Watch:**
    *   See the **Security Scan** pass.
    *   See the **Speedometer** stop at <2s.
    *   See your **Dashboard** update with "Locked" status.
    *   Watch **Rewards** tick up in real-time.

---

## 🔮 Roadmap to Mainnet

| Wave | Focus | Status |
| :--- | :--- | :--- |
| **Wave 1-2** | Core Infra & GoPlus Pivot | ✅ Complete |
| **Wave 3-4** | **Real DeFi Primitive & UX** | ✅ **Complete (Current)** |
| **Wave 5** | AI Agent Integration (ADK) | 📋 Planned |
| **Wave 6** | Audits & Mainnet Launch | 📋 Planned |

---

## 📄 License & Links
*   **Contracts:** `intentlink-contracts/`
*   **Backend:** `intentlink-backend/`

<p align="center">Built with ❤️ for the BlockDAG Ecosystem</p>
