<div align="center">

# ⚡ StratAI Agent
### AI Content Strategy Platform for Bloggers, Brands & Pinterest Marketers

<br/>

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Fonts](https://img.shields.io/badge/Google_Fonts-Outfit_+_Inter-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://fonts.google.com)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://ai-content-strategy-agent.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

<br/>

> *"Your SEO strategist, keyword researcher, and editorial director — in one agentic system."*

**StratAI Agent** is a premium, agentic content strategy platform built for bloggers, brand managers, and Pinterest marketers. It transforms your niche information into actionable keyword reports, SEO-optimized content outlines, and strategic content calendars — through a real-time AI consultation interface with persona-driven intelligence.

**No build step. No dependencies. Pure ES6+ in the browser.**

[**🌐 Live Demo**](https://ai-content-strategy-agent.netlify.app) · [**✨ Features**](#-key-features) · [**🏗️ Architecture**](#-architecture) · [**🚀 Setup**](#-getting-started)

---

</div>

## 📌 The Content Strategy Problem

Content creators and brand managers face a relentless set of compounding challenges:

- **Keyword research is manually intensive** — the right tools are expensive and the output requires expert interpretation
- **Content calendars go stale** — generic planning templates don't adapt to your niche, season, or persona
- **SEO outlines take hours** — researching H1–H3 hierarchies, meta descriptions, and semantic clusters is a specialist skill
- **Strategy advice is one-size-fits-all** — a blogger's content strategy is fundamentally different from a brand's or a Pinterest marketer's

**StratAI Agent eliminates all four pain points** with a persona-aware, agentic AI system that adapts its logic and output to your specific mode of operation.

---

## ✨ Key Features

### 🧠 Three-Persona Strategy Engine
The core differentiator of the system. Toggle between three distinct operational modes in the sidebar — the entire AI reasoning logic, response tone, and strategic focus adapts instantly:

| Persona | Mode Name | Strategic Focus |
|---|---|---|
| **Blogger** | Niche Alpha | Informational intent, topical authority clusters, long-tail keyword targeting |
| **Brand** | Authority | Transactional/commercial intent, thought leadership, brand positioning |
| **Pinterest Marketer** | Pinterest Mode | Visual savability, "Before vs After" formats, board-level audience targeting |

The selected persona is **persisted to `localStorage`** — so your mode is remembered across sessions. Switching persona mid-chat triggers a system message confirming the logic has updated.

### 📊 Live Intelligence Dashboard
A real-time strategy overview surfaced on load:

- **Stat Cards**: Tracked Keywords (`1,248`), Organic Reach (`42.5K`), Content Velocity (`12/mo`), Domain Authority (`48`) — all with up/down trend indicators
- **SVG Sparkline**: Animated market trend curve rendered in pure inline SVG with `var(--accent)` theming
- **Trending in Your Niche**: Live trend classification panel (`Exploding` / `High` / `Steady`)
- **Agent Activity Log**: Simulated agent terminal output — *"> Initializing Blogger heuristic..."*, *"> Scanning SERP landscape..."*, *"> 5 new content gaps identified."*
- **Quick Actions**: One-click shortcuts to `Generate SEO Outline`, `Find Long-tail KWs`, `Audit Pinterest Board`
- **Campaign Progress Bar**: Sidebar progress tracker with percentage display

### 🔍 Keyword Research Tool
A full-featured keyword analysis interface:
- **Seed Keyword Input**: Enter any seed term and trigger analysis
- **Results Table**: Multi-metric keyword report with columns for **Keyword**, **Search Volume**, **Difficulty Score**, **Search Intent Badge**, and **Add Action**
- **Intent Classification**: Color-coded badges — `Informational` (purple) and `Commercial` (amber) — adapting to the active persona
- **Persona-Aware Volume**: Pinterest mode shows `High Savability` instead of raw volume figures — reflecting the platform's different ranking signals

### 🤝 Agent Consultation Profile
A structured profile intake form that gives the agent the context it needs to personalize its analysis:
- **Primary Niche / Industry** — free text
- **Target Audience** — textarea for pain points and demographics
- **Business Objectives** — select from `Attract Traffic`, `Generate Leads`, `Direct Sales`, `Brand Awareness`
- **Top Competitors** — comma-separated URL input for competitive analysis framing

### 📅 Content Calendar View
Strategic monthly editorial planning:
- **Monthly Theme**: Persona-appropriate seasonal theme (e.g., *"Sustainable Kickstart"*)
- **Weekly Content Slots**: Day cards with scheduled post titles and contextual metadata
- **Pinterest Integration Notes**: When in Pinterest mode, the AI overlays pin creation strategies and board recommendations on top of the standard calendar output

### 📝 SEO Outline Generator
Full article skeleton generation:
- **Editable Title Field**: Enter or modify the target H1
- **Metadata Block**: Target keyword, secondary keywords, recommended word count (`1500–2000 words`), and search intent classification
- **Full Heading Hierarchy**: H1 → H2 → H3 structure generated per persona
  - **Blogger**: Educational / informational hierarchy
  - **Brand**: Authority-positioning hierarchy with thought leadership framing
  - **Pinterest**: Visual-first structure with strong visual hooks in each H2
- **Meta Description Template**: Pre-formatted with keyword placement and CTA
- **Regenerate**: Re-run generation with the same or updated title

### 💬 Persistent AI Strategy Chat
A full conversational interface — **always visible** in the right sidebar panel across all views:
- **Persona-Prefixed Responses**: Every AI response begins with `[MODE: Blogger]` / `[MODE: Brand]` / `[MODE: Pinterest]` to make strategic framing explicit
- **Cognitive Thinking Simulation**: A three-dot animated thinking bubble appears during the 1.5–2.5s analysis delay — creating a genuine agentic feel
- **Typewriter Output**: Responses render character-by-character at 15ms/char for immersive read-along effect
- **Intent-Based Routing**: The `getAIResponse()` engine routes queries to specialized handlers:
  - `keyword` → detailed keyword report with volume, difficulty, CPC, intent, secondary KWs, long-tails, and PAA questions
  - `calendar` → full monthly editorial plan with weekly breakdowns and platform-specific formatting notes
  - `outline` → full H1–H2–H3 SEO outline with meta description and word count guidance
  - `hello` / `hi` → persona-aware greeting
  - *anything else* → strategic redirect suggesting keyword reports or outlines
- **Chat History Persistence**: Last 50 messages stored in `localStorage` — conversation survives page refresh
- **Input Sanitization**: All user input passes through a `sanitize()` function (DOM-based XSS prevention) before rendering or processing
- **Enter-to-Send**: `Shift+Enter` for newlines, plain `Enter` submits the message. Blocked during agent thinking state to prevent message collision.

---

## 🏗️ Architecture

### Application Structure

StratAI Agent is a **single-page application** with zero framework dependencies. The entire app renders from three files:

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Browser Runtime                             │
│                                                                     │
│  ┌──────────────────┐  ┌──────────────────┐  ┌─────────────────┐   │
│  │   index.html     │  │    style.css     │  │    main.js      │   │
│  │                  │  │                  │  │                 │   │
│  │  • App shell     │  │  • Design system │  │  • Agent state  │   │
│  │  • Sidebar nav   │  │  • CSS variables │  │  • Persona logic│   │
│  │  • AI chat panel │  │  • Glassmorphism │  │  • View renderer│   │
│  │  • View container│  │  • Animations    │  │  • AI response  │   │
│  │  • Persona select│  │  • Typography    │  │  • localStorage │   │
│  └──────────────────┘  └──────────────────┘  └─────────────────┘   │
│                                                                     │
│  Static assets: CSS adoptedStyleSheets, inline SVG, Google Fonts   │
└──────────────────────────────────────────────────────────────────────┘
```

### State Management

All state lives in `main.js` — no external state management library. Session state is managed through:

| State Variable | Type | Storage | Purpose |
|---|---|---|---|
| `currentPersona` | `string` | `localStorage` | Active strategy mode (`Blogger`, `Brand`, `Pinterest`) |
| `chatHistory` | `Array` | `localStorage` | Last 50 messages — persisted across page refreshes |
| `agentThinking` | `boolean` | In-memory | Guard against concurrent message submission |

### View Rendering Engine

Navigation uses a **dynamic view renderer** — clicking a sidebar nav item calls `renderView(viewId)`, which:
1. Clears `#view-container` innerHTML
2. Creates a new `<section>` element
3. Switches on `viewId` to inject the correct HTML template string (with current persona interpolated)
4. Appends the section to the container

**Views rendered dynamically** (injected on nav click):
- `dashboard` — Re-renders with current persona in welcome banner and agent log
- `consultation` — Profile intake form
- `keywords` — Search input + keyword results table
- `calendar` — Monthly editorial calendar with day cards
- `outlines` — SEO outline generator with editable H1

**Dynamic Styles**: View-specific CSS is injected at runtime via `document.adoptedStyleSheets` — keeping `style.css` clean and view styles co-located with their logic.

### AI Response Engine

The `getAIResponse(input)` function powers all chat responses. It uses **keyword-based intent detection** on the lowercased user input:

```javascript
// Intent routing tree (from main.js)
lowerInput.includes('keyword')  → Keyword Analysis Report (persona-aware volume/intent)
lowerInput.includes('calendar') → Strategic Content Calendar (persona-aware formats)
lowerInput.includes('outline')  → SEO Optimized Outline (persona-aware H1 + intent)
lowerInput.includes('hello/hi') → Persona-aware greeting
default                         → Strategic redirect prompt
```

Each intent handler **interpolates the current persona** into the response — changing intent classification, content formats, volume metrics, and framing based on `Blogger` / `Brand` / `Pinterest` mode.

---

## 🎨 Design System

Built entirely in Vanilla CSS with a refined HSL color palette and glassmorphism design language:

### Core CSS Variables

```css
var(--accent)          /* Primary purple accent */
var(--glass)           /* Glassmorphism background */
var(--glass-border)    /* Subtle glass border */
var(--text-secondary)  /* Muted text color */
```

### Component Classes

| Class | Description |
|---|---|
| `.glass` | Glassmorphism card background — backdrop blur + semi-transparent |
| `.text-gradient` | HSL gradient text for headings |
| `.btn-primary` | Primary CTA button with accent fill |
| `.btn-secondary` | Ghost / outline variant |
| `.badge.info` | Purple intent badge (Informational) |
| `.badge.commercial` | Amber intent badge (Commercial) |
| `.stat-trend.up` | Green trending indicator |
| `.stat-trend.neutral` | Muted neutral indicator |
| `.thinking-bubble` | Three animated dots for agent thinking state |

### Typography

- **Outfit** (weights: 300, 400, 600, 700) — headings and UI labels
- **Inter** (weights: 300, 400, 500, 600) — body text and chat messages

---

## 🚀 Getting Started

### Prerequisites

This project has **zero dependencies** and requires **no build step**. All you need is:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optionally: a local file server for the best development experience

### Option A — Open Directly

```bash
# Clone the repository
git clone https://github.com/Ismail-2001/AI-Content-Strategy-Agent.git
cd AI-Content-Strategy-Agent

# Open in browser
open index.html           # macOS
start index.html          # Windows
xdg-open index.html       # Linux
```

### Option B — Local Server (Recommended)

Using any local server avoids potential CORS quirks with `adoptedStyleSheets`:

```bash
# Using npx serve
npx serve .

# Using Python
python -m http.server 8080

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then navigate to `http://localhost:3000` (or whatever port your server uses).

---

## 💡 Usage Guide

### Switching Persona Mode

Use the **"Strategy Mode"** dropdown in the left sidebar. Options:

- **Blogger (Niche Alpha)** — Best for individual bloggers targeting informational long-tail keywords
- **Brand (Authority)** — Best for companies targeting commercial/transactional terms and thought leadership
- **Pinterest Marketer** — Best for creators optimizing for saves, boards, and visual content

Persona is saved automatically. Every AI response and tool output will adapt to the selected mode.

### Using the AI Chat

The AI Strategy Agent is always visible in the **right sidebar**. Type any of these to trigger a specific output:

| What to type | What you get |
|---|---|
| *"keyword research for sustainable living"* | Full keyword report with volume, difficulty, CPC, intent, secondary KWs, long-tails, PAA |
| *"create a content calendar for February"* | Monthly calendar with weekly content slots, themes, and Pinterest pin strategy |
| *"generate an outline for zero waste kitchen"* | Full H1–H2–H3 SEO outline with meta description and word count |
| *"hi"* / *"hello"* | Persona-aware greeting with available commands |

### Navigating Views

Use the left nav to switch between the five strategy tools:

| Nav Item | View | Key Action |
|---|---|---|
| 📊 Dashboard | Overview | Trend monitoring, quick actions, agent log |
| 🤝 Consultation | Profile intake | Save niche, audience, goals, competitors |
| 🔍 Keyword Research | KW table | Enter a seed keyword, analyze results |
| 📅 Content Calendar | Editorial plan | Browse monthly schedule and week themes |
| 📝 SEO Outlines | Article structure | Edit the H1 and regenerate the full outline |

---

## 📂 Project Structure

```text
AI-Content-Strategy-Agent/
│
├── index.html          # Application shell — sidebar, nav, chat panel, view container
├── main.js             # Core agent logic:
│                       #   • Persona state management + localStorage persistence
│                       #   • Dynamic view rendering engine (renderView)
│                       #   • AI response router (getAIResponse)
│                       #   • Agentic thinking simulation + typewriter output
│                       #   • Input sanitization (XSS protection)
│                       #   • adoptedStyleSheets for dynamic view CSS
│
├── style.css           # Complete design system:
│                       #   • HSL CSS custom properties (color palette)
│                       #   • Glassmorphism component styles
│                       #   • 60fps micro-animations and transitions
│                       #   • Typography (Outfit + Inter)
│                       #   • Responsive layout (sidebar + main + chat panel)
│                       #   • Chat message styles (user / system / thinking-bubble)
│
├── assets/
│   └── hero.png        # AI-generated hero/dashboard imagery
│
└── netlify.toml        # Netlify deployment configuration
```

---

## 🌍 Deployment

### Netlify (Recommended — One-Click)

The project is pre-configured for Netlify with `netlify.toml`. Since there's no build step, deployment is instant:

1. **Fork** this repository to your GitHub account
2. Go to [Netlify](https://app.netlify.com) → **"Add new site"** → **"Import from GitHub"**
3. Select this repository
4. Build settings:
   - **Build Command**: *(leave blank)*
   - **Publish Directory**: `.` *(root)*
5. Click **Deploy** ✅

**Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.
```

### GitHub Pages

```bash
# No build step needed — just enable GitHub Pages
# Go to: Settings → Pages → Source: Deploy from branch → Branch: main → / (root)
```

### Any Static Host (Vercel, Cloudflare Pages, Surge.sh)

```bash
# Vercel
npx vercel --prod

# Cloudflare Pages — connect GitHub repo, publish dir: .

# Surge.sh
npm install -g surge
surge . your-domain.surge.sh
```

---

## 🗺️ Roadmap

### ✅ Phase 1 — Core Platform (Complete)
- [x] Three-persona strategy engine with `localStorage` persistence
- [x] Dynamic single-page view rendering (no router library)
- [x] Live intelligence dashboard with SVG sparklines and stat cards
- [x] Keyword research table with intent classification badges
- [x] Agent Consultation profile intake form
- [x] Content Calendar with monthly theme and weekly day cards
- [x] SEO outline generator with H1–H2–H3 hierarchy
- [x] Persistent AI Strategy Chat (last 50 messages in `localStorage`)
- [x] Cognitive thinking simulation (animated dots + delay)
- [x] Typewriter response output at 15ms/char
- [x] Client-side XSS sanitization on all user inputs
- [x] `adoptedStyleSheets` dynamic CSS injection
- [x] Netlify deployment with `netlify.toml`

### 🔨 Phase 2 — Real LLM Integration (Next)
- [ ] **Node.js Backend / Netlify Functions**: Replace heuristic responses with real LLM tool-calling (OpenAI / DeepSeek / Gemini)
- [ ] **Structured Tool Calls**: `keyword_research()`, `generate_outline()`, `build_calendar()` as formal LLM tools
- [ ] **Dynamic Keyword Data**: Real search volume and difficulty data via DataForSEO or Semrush API
- [ ] **Export to CSV/PDF**: Download keyword reports and content calendars

### 📋 Phase 3 — Retrieval & Memory (Planned)
- [ ] **RAG for Brand Voice**: Upload past articles or brand guidelines — the AI learns and mirrors your unique voice
- [ ] **Semantic Memory**: Long-term user context (niche, audience, competitors) persisted across sessions beyond current session snapshot
- [ ] **Competitor Gap Analysis**: Scrape and analyze competitor content to find untapped keyword opportunities

### 🔭 Phase 4 — Multi-Agent & Migration (Vision)
- [ ] **Multi-Agent Workflows**: Keyword Agent → Writer Agent → Editor Agent pipeline for full article production
- [ ] **Pinterest API Integration**: Real board analytics, pin performance tracking, and trend data
- [ ] **Component Architecture Migration**: Vite + React for better state management and code splitting as the app scales
- [ ] **Team Workspaces**: Multi-user access with persona and strategy configuration per team member

---

## 🤝 Contributing

Contributions of all kinds are welcome:

- **New AI response intents** — add new `lowerInput.includes('...')` branches to `getAIResponse()` in `main.js`
- **New view panels** — add a new `case` to the `renderView()` switch and a nav item in `index.html`
- **Design improvements** — extend the design system in `style.css` with new component tokens
- **New persona modes** — add new `<option>` values to `#persona-select` and handle in response logic

To contribute:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** with [Conventional Commits](https://www.conventionalcommits.org/): `git commit -m "feat: add Twitter/X persona mode"`
4. **Push** and open a **Pull Request** against `main`

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

<div align="center">

**Built for content creators who refuse to guess at strategy.**

*If StratAI Agent changed how you think about SEO and content planning, star ⭐ the repo.*

[![GitHub Stars](https://img.shields.io/github/stars/Ismail-2001/AI-Content-Strategy-Agent?style=social)](https://github.com/Ismail-2001/AI-Content-Strategy-Agent)

Built with ❤️ by [Ismail Sajid](https://github.com/Ismail-2001)

</div>
