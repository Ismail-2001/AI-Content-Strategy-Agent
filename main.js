document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    const viewContainer = document.getElementById('view-container');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    // Agent State and Configuration
    let currentPersona = localStorage.getItem('agentPersona') || 'Blogger';
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    let agentThinking = false;

    // Security: Input Sanitization
    function sanitize(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Persona Selection
    const personaSelect = document.getElementById('persona-select');
    personaSelect.value = currentPersona;

    personaSelect.addEventListener('change', (e) => {
        currentPersona = e.target.value;
        localStorage.setItem('agentPersona', currentPersona);
        addMessage(`Persona switched to: ${currentPersona}. Strategy logic updated.`, 'system-intro');
    });

    // Navigation logic
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.getAttribute('data-view');

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            renderView(targetView);
        });
    });

    function renderView(viewId) {
        // Clear previous view
        viewContainer.innerHTML = '';

        const section = document.createElement('section');
        section.id = viewId;
        section.className = 'view active';

        switch (viewId) {
            case 'dashboard':
                section.innerHTML = `
                    <div class="welcome-banner">
                        <div class="banner-content">
                            <h1>Welcome back, <span class="text-gradient">Strategist</span></h1>
                            <p>Current Strategy: <strong>${currentPersona}</strong>. Your AI agent has analyzed 5 new trends in your niche.</p>
                        </div>
                    </div>
                    <div class="stat-grid">
                        <div class="stat-card glass">
                            <span class="stat-title">Tracked Keywords</span>
                            <span class="stat-value">1,248</span>
                            <span class="stat-trend up">+12.5%</span>
                        </div>
                        <div class="stat-card glass chart-card">
                            <span class="stat-title">Market Trend Analysis</span>
                            <div class="mini-chart">
                                <svg viewBox="0 0 100 40" class="sparkline">
                                    <path d="M0 35 Q 20 10, 40 30 T 80 5 T 100 20" fill="none" stroke="var(--accent)" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <div class="stat-card glass">
                            <span class="stat-title">Content Velocity</span>
                            <span class="stat-value">12/mo</span>
                            <span class="stat-trend neutral">0%</span>
                        </div>
                        <div class="stat-card glass">
                            <span class="stat-title">Domain Authority</span>
                            <span class="stat-value">48</span>
                            <span class="stat-trend up">+2%</span>
                        </div>
                    </div>
                    <div class="content-row">
                        <div class="card glass flex-2">
                            <h3>Trending in Your Niche</h3>
                            <div class="trend-list">
                                <div class="trend-item">
                                    <span class="trend-name">Sustainable Living 2026</span>
                                    <span class="trend-volume">Exploding</span>
                                </div>
                                <div class="trend-item">
                                    <span class="trend-name">AI Ethics for Bloggers</span>
                                    <span class="trend-volume">High</span>
                                </div>
                                <div class="trend-item">
                                    <span class="trend-name">Zero-Waste Kitchen Hacks</span>
                                    <span class="trend-volume">Steady</span>
                                </div>
                            </div>
                        </div>
                        <div class="card glass flex-1">
                            <h3>Agent Activity Log</h3>
                            <div class="agent-log" id="agent-log">
                                <div class="log-line">> Initializing ${currentPersona} heuristic...</div>
                                <div class="log-line">> Scanning SERP landscape...</div>
                                <div class="log-line">> 5 new content gaps identified.</div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'consultation':
                section.innerHTML = `
                    <h2>Agent Consultation</h2>
                    <p class="subtitle">Complete this profile to help me tailor your strategy.</p>
                    <div class="form-container glass">
                        <div class="form-group">
                            <label>Primary Niche/Industry</label>
                            <input type="text" placeholder="e.g. Sustainable Living, SaaS, Travel">
                        </div>
                        <div class="form-group">
                            <label>Target Audience</label>
                            <textarea placeholder="Who are they? What are their pain points?"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Business Objectives</label>
                            <select>
                                <option>Attract Traffic</option>
                                <option>Generate Leads</option>
                                <option>Direct Sales</option>
                                <option>Brand Awareness</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Top Competitors (3-5)</label>
                            <input type="text" placeholder="URL 1, URL 2, URL 3">
                        </div>
                        <button class="btn btn-primary">Save Profile & Initialize Agent</button>
                    </div>
                `;
                break;
            case 'keywords':
                section.innerHTML = `
                    <div class="view-header">
                        <h2>Keyword Research</h2>
                        <button class="btn btn-secondary">New Analysis</button>
                    </div>
                    <div class="keyword-tool glass">
                        <div class="search-box">
                            <input type="text" placeholder="Enter seed keyword...">
                            <button class="btn btn-primary">Analyze</button>
                        </div>
                        <div class="results-table-container">
                            <table class="results-table">
                                <thead>
                                    <tr>
                                        <th>Keyword</th>
                                        <th>Volume</th>
                                        <th>Difficulty</th>
                                        <th>Intent</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>sustainable decor ideas</td>
                                        <td>12.4K</td>
                                        <td>32</td>
                                        <td><span class="badge info">Informational</span></td>
                                        <td><button class="sm-btn">Add</button></td>
                                    </tr>
                                    <tr>
                                        <td>eco-friendly furniture brands</td>
                                        <td>8.2K</td>
                                        <td>54</td>
                                        <td><span class="badge commercial">Commercial</span></td>
                                        <td><button class="sm-btn">Add</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
                break;
            case 'calendar':
                section.innerHTML = `
                    <h2>Content Calendar - January 2026</h2>
                    <div class="calendar-grid">
                        <!-- Calendar visual placeholder -->
                        <div class="calendar-placeholder glass">
                            <p>Monthly Theme: <strong>Sustainable Kickstart</strong></p>
                            <div class="week-row">
                                <div class="day-card"><span>Jan 5</span><p>Zero Waste Kitchen</p></div>
                                <div class="day-card"><span>Jan 12</span><p>Eco-friendly Cleaning</p></div>
                                <div class="day-card"><span>Jan 19</span><p>Solar Power Guide</p></div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'outlines':
                section.innerHTML = `
                    <h2>SEO Outline Generator</h2>
                    <div class="outline-container glass">
                        <div class="outline-config">
                            <input type="text" value="Top 10 Zero-Waste Kitchen Hacks for 2026">
                            <button class="btn btn-primary">Regenerate</button>
                        </div>
                        <div class="outline-preview">
                            <h3>H1: Top 10 Zero-Waste Kitchen Hacks for 2026</h3>
                            <p><strong>Target Keyword:</strong> Zero-waste kitchen hacks</p>
                            <p><strong>Length:</strong> 1500 - 2000 words</p>
                            <hr>
                            <h4>H2: Why Transition to a Zero-Waste Kitchen?</h4>
                            <ul>
                                <li>Environmental impact of kitchen waste</li>
                                <li>Cost-saving benefits</li>
                            </ul>
                            <h4>H2: 1. Composting Made Easy</h4>
                            <h4>H2: 2. Reusable Food Wraps vs Plastic</h4>
                        </div>
                    </div>
                `;
                break;
        }
        viewContainer.appendChild(section);
    }

    // Initialize with dashboard
    renderView('dashboard');

    function addMessage(text, sender, isThinking = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender} ${isThinking ? 'thinking-bubble' : ''}`;

        if (isThinking) {
            msgDiv.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        } else {
            msgDiv.textContent = text;
            // Record history (exclude system intro and temporary thinking)
            if (sender !== 'system-intro' && !isThinking) {
                chatHistory.push({ text, sender, time: Date.now() });
                localStorage.setItem('chatHistory', JSON.stringify(chatHistory.slice(-50)));
            }
        }

        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return msgDiv;
    }

    async function handleAgentResponse(userInput) {
        if (agentThinking) return;
        agentThinking = true;

        const thinkingMsg = addMessage('', 'system', true);

        // Simulated Agentic Delay (Simulating analysis phase)
        await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

        thinkingMsg.remove();
        const response = getAIResponse(userInput);

        // Typewriter Effect for Agentic Feel
        const finalMsg = addMessage('', 'system');
        let i = 0;
        const speed = 15;

        function typeWriter() {
            if (i < response.length) {
                finalMsg.textContent += response.charAt(i);
                i++;
                chatMessages.scrollTop = chatMessages.scrollHeight;
                setTimeout(typeWriter, speed);
            } else {
                agentThinking = false;
            }
        }
        typeWriter();
    }

    sendBtn.addEventListener('click', () => {
        const text = chatInput.value.trim();
        if (text && !agentThinking) {
            const sanitized = sanitize(text);
            addMessage(sanitized, 'user');
            chatInput.value = '';
            handleAgentResponse(sanitized);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });

    function getAIResponse(input) {
        const lowerInput = input.toLowerCase();
        const personaPrefix = `[MODE: ${currentPersona}] `;

        if (lowerInput.includes('keyword')) {
            let volume = currentPersona === 'Pinterest' ? 'High Savability' : '12.5K';
            return `${personaPrefix}Keyword Analysis Report:
PRIMARY KEYWORD: [Your Seed Prompt]
- Search Volume: ${volume}
- Keyword Difficulty: 32/100
- Intent: ${currentPersona === 'Brand' ? 'Transactional/Commercial' : 'Informational'}
- CPC: $1.20

SECONDARY KEYWORDS:
- sustainable living tips - 5K - 28
- eco friendly lifestyle - 8.2K - 45

LONG-TAIL VARIATIONS:
- how to start a zero waste kitchen
- sustainable home decor ideas 2026

QUESTIONS PEOPLE ASK:
- Is sustainable living expensive?
- How can I reduce my carbon footprint at home?`;
        }

        if (lowerInput.includes('calendar')) {
            return `${personaPrefix}Strategic Content Calendar:
MONTH: February 2026
THEME: The Sustainable Transition

Week 1:
- Feb 2 - "The Zero Waste Kitchen Guide" - Keyword: Zero Waste Kitchen - Intent: Informational - Format: ${currentPersona === 'Pinterest' ? 'Visual Tutorial' : 'Ultimate Guide'}
- Feb 5 - "5 Plastic-Free Swaps" - Keyword: Plastic-Free Swaps - Intent: Commercial - Format: Listicle

PINTEREST INTEGRATION:
- Create 3 pins for 'Kitchen Guide' focusing on 'Before vs After'
- Board: Eco-Friendly Home Tips`;
        }

        if (lowerInput.includes('outline')) {
            return `${personaPrefix}SEO Optimized Outline:
TITLE (H1): ${currentPersona === 'Brand' ? 'Why Your Brand Needs Sustainable Practices' : 'Top 10 Zero-Waste Kitchen Hacks for 2026'}
TARGET KEYWORD: Zero-waste kitchen hacks
SECONDARY KEYWORDS: sustainable kitchen, plastic-free living
RECOMMENDED LENGTH: 1500-2000 words
INTENT: ${currentPersona === 'Brand' ? 'Authority' : 'Educational'}

META DESCRIPTION: Discover the most effective zero-waste kitchen hacks for 2026. Reduce waste, save money, and live sustainably with these 10 actionable tips.

INTRODUCTION:
- Hook addressing the global waste crisis
- Preview what readers will learn

H2: Why Transition to a Zero-Waste Kitchen?
H2: 1. Composting Made Simple
H2: 2. Bulk Buying Strategies
CONCLUSION: Call to action for newsletter signups.`;
        }

        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return `Hello! I'm your AI Content Strategy Agent, currently operating in ${currentPersona} mode. I can help you with Keyword Research, Content Calendars, and SEO Outlines. What niche are we tackling today?`;
        }

        return `${personaPrefix}Analyzing query... I've processed your request. Based on my strategy logic, focusing on topical authority through semantic clusters would be the best next step. Should I generate a keyword report or an SEO outline for you?`;
    }
});

// Add extra CSS for the dynamic views
const sheet = new CSSStyleSheet();
sheet.replaceSync(`
    .form-container { display: flex; flex-direction: column; gap: 20px; max-width: 600px; margin-top: 24px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 0.9rem; color: var(--text-secondary); }
    .form-group input, .form-group textarea, .form-group select {
        background: var(--glass);
        border: 1px solid var(--glass-border);
        padding: 12px;
        border-radius: 10px;
        color: white;
        outline: none;
    }
    .subtitle { color: var(--text-secondary); margin-top: 8px; }
    .keyword-tool { margin-top: 24px; }
    .search-box { display: flex; gap: 12px; margin-bottom: 24px; }
    .search-box input { flex: 1; background: var(--glass); border: 1px solid var(--glass-border); padding: 12px; border-radius: 10px; color: white; }
    .results-table { width: 100%; border-collapse: collapse; }
    .results-table th { text-align: left; padding: 12px; border-bottom: 1px solid var(--glass-border); color: var(--text-secondary); font-size: 0.85rem; }
    .results-table td { padding: 16px 12px; border-bottom: 1px solid var(--glass-border); }
    .badge { padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; }
    .badge.info { background: rgba(124, 77, 255, 0.2); color: var(--accent); }
    .badge.commercial { background: rgba(255, 152, 0, 0.2); color: #ff9800; }
    .sm-btn { background: var(--glass); border: 1px solid var(--glass-border); color: white; padding: 4px 10px; border-radius: 6px; cursor: pointer; }
    .outline-config { display: flex; gap: 12px; margin-bottom: 24px; }
    .outline-config input { flex: 1; background: var(--glass); border: 1px solid var(--glass-border); padding: 12px; border-radius: 10px; color: white; font-weight: 600; }
    .outline-preview { line-height: 1.6; }
    .outline-preview h3 { margin-bottom: 12px; color: var(--accent); }
    .outline-preview hr { border: 0; border-top: 1px solid var(--glass-border); margin: 20px 0; }
    .calendar-placeholder { padding: 40px; text-align: center; }
    .week-row { display: flex; gap: 12px; margin-top: 20px; }
    .day-card { flex: 1; background: var(--glass); border: 1px solid var(--glass-border); padding: 16px; border-radius: 12px; text-align: left; }
    .day-card span { font-size: 0.8rem; color: var(--text-secondary); }
    .day-card p { margin-top: 8px; font-weight: 600; font-size: 0.9rem; }
`);
document.adoptedStyleSheets = [sheet];
