

---

# ⛏ The Grotto — HashCash Miner Trials

> A Web3 skill-based quiz game on Grotto L1 (Avalanche subnet). Identify HashCash Miner NFTs, compete for a shared prize pool, and put your $HERESY to work.

**Built by [@precidobos](https://twitter.com/precidobos) for the [hashcash.club](https://hashcash.club) HashAthon · Deployed on Grotto L1**

---

## 🎮 What Is This?

The Grotto is a single-file Web3 game where players identify **HashCash Miner NFTs** from their images. Real miner images are fetched live from the HashCash API. Players connect their MetaMask wallet, pick the correct miner name from three options, and score points based on accuracy and streaks.

There are two modes:

| Mode | Entry | Goal |
|------|-------|------|
| **Free Mode** | Free | 10 rounds, 3 lives, practice & high scores |
| **Grotto Trials** | $1 in $HERESY or $hCASH | 60 seconds, top 5 split the prize pool |

---

## ⛓ Chain & Token Info

| Chain | Token | Amount | Contract |
|-------|-------|--------|----------|
| Grotto L1 (Chain ID: 36463) | $HERESY | 0.00085 = $1 USD | `0x432d38F83a50EC77C409D086e97448794cf76dCF` |
| Avalanche C-Chain (Chain ID: 43114) | $hCASH | 18 = $1 USD | `0xBa5444409257967E5E50b113C395A766B0678C03` |

---

## 🏆 Prize Pool

- Top 5 players by best paid trial score split the prize pool every **7 days**
- 5% platform fee deducted first
- Distribution: 🥇 40% · 🥈 25% · 🥉 15% · 4th 12% · 5th 8%
- Only your **best score** counts — buy more chances to improve your rank

---

## ✨ Features

- 🔴 **Live miner images** fetched from HashCash API
- 🔗 **MetaMask wallet** connect with auto chain add/switch
- 🌋 **Grotto L1** and **Avalanche C-Chain** support
- 💀 **Paid Grotto Trials** — 60-second timed runs, no per-question timer
- 📊 **Leaderboard** with prize pool breakdown and 7-day countdown
- 🔄 **Aggregate sessions** — multiple active purchases pool together automatically
- 🛡 **Anti-cheat** — each transaction hash verified on-chain, single use only
- 🖼 **Image preloading** — next miner preloaded while you answer the current one
- 🔊 **Web Audio sounds** — synth click, correct/wrong/timeout tones, no files needed
- 👤 **Player profiles** — username, game history, payment history
- 🎓 **Animated How To Play** demo using real live miner images
- ⌨️ **Keyboard controls** — 1/2/3 to answer, H for hint, Enter to start
- 📦 **Single HTML file** — zero build tools, zero dependencies to install

---

## 🛠 Tech Stack

- **Frontend** — Vanilla HTML, CSS, JavaScript (single file)
- **Blockchain** — ethers.js v6, MetaMask provider
- **Chains** — Grotto L1 (Avalanche subnet), Avalanche C-Chain
- **Database** — Supabase (player registry, sessions, leaderboard, game history)
- **NFT Data** — HashCash Public API (live miner images + metadata)
- **Audio** — Web Audio API (synthesized, no external files)
- **Fonts** — Google Fonts (Cinzel Decorative, Share Tech Mono)

---

## 🚀 Getting Started

No build step. No npm install. Just open the file.

```bash
git clone https://github.com/yourusername/the-grotto.git
cd the-grotto
```

Then open `index.html` in your browser — or host it anywhere static (GitHub Pages, Vercel, Netlify, etc.).

### Deploy to GitHub Pages

```bash
# Push to main branch, then enable Pages in repo Settings
# Source: Deploy from branch → main → / (root)
```

---

## 🎮 How to Play

1. Open the game and click **CONNECT WALLET**
2. MetaMask will prompt you to add **The Grotto L1** network automatically
3. Choose a username — it appears on the leaderboard
4. **Free Mode** — click Enter The Grotto, identify miners across 10 rounds
5. **Grotto Trials** — click the paid mode card, confirm a $HERESY or $hCASH payment, get 3 chances
6. Each chance = 60 seconds to identify as many miners as possible
7. Your best score is submitted to the leaderboard

### Keyboard Shortcuts (Free Mode)
| Key | Action |
|-----|--------|
| `1` | Pick option A |
| `2` | Pick option B |
| `3` | Pick option C |
| `H` | Use hint (removes one wrong option) |
| `Enter` | Start game from intro screen |

---

## 📁 Project Structure

```
index.html          # Entire game — styles, HTML, and JS in one file
README.md           # This file
```

---

## 🔧 Configuration

All config lives at the top of the `<script>` block in `index.html`:

```js
const API_KEY = '...';              // HashCash API key
const SUPABASE_URL = '...';         // Your Supabase project URL
const SUPABASE_ANON = '...';        // Supabase anon key
const ADMIN_WALLET = '0x...';       // Wallet that receives payments

const CHAINS = {
  grotto: {
    chainId: 36463,
    chainIdHex: '0x8E6F',
    rpc: 'https://subnets.avax.network/thegrotto/mainnet/rpc',
    tokenAddress: '0x432d38F83a50EC77C409D086e97448794cf76dCF',
    tokenAmount: '850000000000000',   // 0.00085 HERESY in wei
    ...
  },
  avax: { ... }
}
```

---

## 🗄 Supabase Schema

The game expects these tables and views in your Supabase project:

| Table / View | Purpose |
|---|---|
| `players` | Wallet address, username, chain |
| `paid_sessions` | Payment sessions, chances used/max, status |
| `game_runs` | Individual game results per wallet |
| `leaderboard_top5` | View — top 5 by best paid score |
| `prize_pool_summary` | View — total entries and net prize pool |
| `payment_history` | View — per-wallet session history |

### RPC Functions needed:
- `is_username_taken(p_username)` → boolean
- `is_tx_hash_used(p_tx_hash)` → boolean
- `use_paid_chance(p_session_id, p_score, p_correct)` → void

---

## ⚠️ Known Limitations

- Prize distribution is currently manual — no on-chain auto-payout yet
- Supabase is centralised — a future version should use a fully on-chain leaderboard
- Mobile layout not fully optimised for small screens

---

## 🔮 Roadmap

- [ ] On-chain leaderboard smart contract
- [ ] Automated prize payout at end of each 7-day window
- [ ] Head-to-head multiplayer mode
- [ ] Miner NFT staking bonuses — hold miners, get score multipliers
- [ ] Mobile PWA support
- [ ] Blitz mode — 30 seconds, extreme difficulty only
- [ ] Replay viewer — see which miners you missed

---

## 📄 License

MIT — do whatever you want, just don't remove the credit.

---

## 🙏 Credits

Built by **[@precidobos](https://twitter.com/precidobos)** for the **[hashcash.club](https://hashcash.club) HashAthon**
Powered by **Grotto L1** · **Avalanche** · **HashCash Miners**
