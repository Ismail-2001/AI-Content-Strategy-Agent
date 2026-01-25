# StratAI Agent - AI Content Strategy Agent

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Netlify Status](https://img.shields.io/badge/Deployment-Netlify-%2300C7B7)
![Version](https://img.shields.io/badge/version-1.1.0-orange)

StratAI Agent is a premium, high-fidelity AI-driven content strategy platform designed for bloggers, brand managers, and Pinterest marketers. It transforms niche data into actionable content calendars, SEO-optimized outlines, and targeted keyword reports using a sophisticated "agentic" persona system.

---

## ✨ Features

- **Agentic Persona System**: Toggle between `Blogger`, `Brand`, and `Pinterest` modes. The AI's logic, tone, and strategic focus adapt instantly.
- **Cognitive Thinking Simulation**: Realistic agent analysis states with "thinking" animations and typewriter effects for true agentic engagement.
- **Market Trend Dashboard**: Real-time trend visualization using dynamic sparklines and key performance metrics.
- **Strategic Tooling**:
  - **Keyword Research**: Multi-metric reports with intent classification.
  - **Content Calendar**: Seasonal and evergreen scheduling.
  - **SEO Outline Generator**: Full H1-H3 hierarchy with meta-data templates.
- **Premium Design System**: Cutting-edge Glassmorphism UI built with a refined HSL color palette and 60fps micro-animations.
- **Persistence & Security**: Local session storage and client-side input sanitization.

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5 (Semantic)
- **Styling**: Pure CSS3 (Custom Variables, Advanced Gradients, Glassmorphism)
- **Visuals**: SVG Sparklines, AI-generated Cinematic Hero Imagery
- **Deployment**: Netlify Ready

---

## 📂 Folder Structure

```text
AI-Content-Strategy-Agent/
├── assets/             # Project imagery and icons
│   └── hero.png        # AI-generated dashboard visual
├── .gitignore          # standard repo exclusions
├── index.html          # Main application structure
├── main.js             # Core Agentic logic & view handling
├── netlify.toml        # Netlify deployment configuration
├── style.css           # Premium Alpha design system
└── README.md           # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser. No complex build tools are required for this vanilla implementation.

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ai-content-strategy-agent.git
   cd ai-content-strategy-agent
   ```

2. **Serve the project**:
   You can use any local server. For example, using `npx`:
   ```bash
   npx serve .
   ```
   Or simply open `index.html` in your browser.

---

## 🌍 Netlify Deployment

This project is optimized for a one-click deployment on Netlify.

### Steps to Deploy:

1. **GitHub Integration**: Connect your repo to Netlify.
2. **Build Settings**:
   - **Build Command**: (Leave blank or `echo 'Deploying...'`)
   - **Publish Directory**: `.` (Root)
3. **Environment Variables**: If you integrate real LLM APIs in the future, add your keys in the Netlify UI under `Site settings > Build & deploy > Environment`.

---

## 🗺️ Roadmap

- [ ] **Phase 1**: Integrate real LLM Tool-Calling via a Node.js backend.
- [ ] **Phase 2**: Add RAG (Retrieval-Augmented Generation) for custom brand voice learning.
- [ ] **Phase 3**: Implement multi-agent workflows (Keyword Agent ↔ Writer Agent).
- [ ] **Phase 4**: Migration to a component-based architecture (e.g., Vite + React).

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Developed with ❤️ by the StratAI Team.**
