# 🚀 DevMentor - AI Pair Programming for Solo Learners

![DevMentor Banner](https://img.shields.io/badge/Hackathon-Anthropic%202026-FF6B35?style=for-the-badge)
![Track](https://img.shields.io/badge/Track-AI%20for%20Learning%20%26%20Developer%20Productivity-004E89?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live%20Demo-06D6A0?style=for-the-badge)

**Never code alone again.** DevMentor is your AI pair programmer that teaches like a senior developer - asking *you* questions, catching mistakes *before* you make them, and adapting to your learning style in real-time.

[🌐 Live Demo](#) | [📖 Documentation](#features) | [🎥 Demo Video](#)

---

## 🎯 The Problem We Solve

**80% of aspiring developers learn alone**, without access to mentorship. Traditional tutorials are passive - you watch, copy-paste, but don't develop real problem-solving skills. When stuck, you're truly stuck.

**DevMentor transforms solo coding into an interactive mentorship experience.**

---

## ✨ What Makes DevMentor Different

| Traditional AI Coding Tools | DevMentor (Revolutionary) |
|----------------------------|---------------------------|
| Passive Q&A or code completion | **Active pair programming partner** |
| Gives you the answer | **Asks YOU guiding questions** |
| Explains after you're stuck | **Prevents mistakes proactively** |
| One-size-fits-all responses | **Adapts to your learning style** |
| Single AI doing everything | **Multi-agent system** (Teacher + Reviewer + Debugger) |

---

## 🤖 Multi-Agent Architecture (Our Innovation)

DevMentor uses a sophisticated **three-agent system** where each AI specialist plays a distinct role:

### 1. 🧑‍🏫 Teacher Agent (Socratic Method)
- **Never gives direct answers first** - asks guiding questions
- Uses analogies and real-world examples
- Encourages you to think through problems yourself

**Example:**
```
You: "How do I reverse a string in Python?"
Teacher: "Great question! Before I help, can you tell me: 
          what approaches have you thought about? 
          Can you describe the problem in your own words?"
```

### 2. 👨‍💻 Code Review Agent (Real-Time)
- **Watches you code as you type** and intervenes at key moments
- Catches common mistakes before you run your code
- Provides proactive warnings and suggestions

**Example:**
```
You type: list = [1, 2, 3]
Reviewer: "⚠️ Heads up! You're about to shadow Python's built-in 
           'list' type. This will cause problems later. 
           Try 'my_list' or 'numbers' instead."
```

### 3. 🔍 Debugging Agent (Methodology Teacher)
- **Doesn't just find bugs** - teaches debugging methodology
- Guides you through structured problem-solving
- Celebrates when YOU figure it out

**Example:**
```
You: "My code returns None instead of the sum"
Debugger: "Let's debug this together. First question: 
           Did you add a return statement? 
           Let me know what you see."
```

---

## 🎨 Key Features

### ⚡ Real-Time Pair Programming
- Split-screen editor with live AI guidance
- Proactive feedback as you type
- Context-aware assistance

### 🎯 Proactive Mistake Prevention
- Database of 50+ common beginner errors
- Real-time pattern matching
- Educational warnings, not judgmental

### 🧠 Adaptive Learning
- Detects your learning style automatically
- Adjusts responses based on your pace
- Tracks progress over time

### 📊 Visual Progress Tracking
- Interactive skill tree
- Real-time mastery metrics
- Personalized learning paths

### 🔒 Privacy First
- Your code never leaves your session
- No training on user data
- Secure, encrypted connections

---

## 🛠️ Technology Stack

**Frontend:**
- React 18 with TypeScript
- Monaco Editor (VS Code's editor)
- Tailwind CSS for styling
- WebSocket for real-time communication

**Backend:**
- Node.js + Express
- Claude API (Anthropic Sonnet 4)
- PostgreSQL for data persistence
- Redis for session caching

**Infrastructure:**
- Docker for code execution sandboxing
- GitHub Actions for CI/CD
- Vercel/Railway for deployment

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Claude API key (get one at [anthropic.com](https://anthropic.com))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/devmentor.git
cd devmentor
```

2. **Install dependencies**
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. **Set up environment variables**
```bash
# Backend .env file
ANTHROPIC_API_KEY=your_api_key_here
DATABASE_URL=postgresql://localhost:5432/devmentor
REDIS_URL=redis://localhost:6379
PORT=3000

# Frontend .env file
VITE_WS_URL=ws://localhost:3000
VITE_API_URL=http://localhost:3000
```

4. **Run the development servers**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

---

## 📁 Project Structure

```
devmentor/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── features/        # Feature-specific components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API and WebSocket services
│   │   └── stores/          # State management
│   └── public/              # Static assets
│
├── backend/                  # Node.js backend server
│   ├── agents/              # AI agent implementations
│   │   ├── TeacherAgent.js
│   │   ├── CodeReviewAgent.js
│   │   ├── DebuggingAgent.js
│   │   └── Orchestrator.js
│   ├── services/            # Business logic services
│   │   ├── claudeService.js
│   │   ├── codeExecutor.js
│   │   └── mistakeDetector.js
│   └── routes/              # API routes
│
├── docs/                     # Documentation
│   ├── requirements.md      # Product requirements
│   ├── design.md            # Technical design
│   └── api.md               # API documentation
│
└── README.md                # You are here!
```

---

## 🎬 Demo Scenarios

### Scenario 1: Learning String Reversal
Watch how DevMentor guides a beginner through implementing string reversal:

1. **Teacher** asks what "reverse" means conceptually
2. **Code Review** catches missing colon syntax error
3. **Debugger** helps trace through the logic
4. **Teacher** asks about edge cases (empty strings)
5. User discovers the solution with guidance!

### Scenario 2: Debugging Logic Errors
See how DevMentor teaches debugging methodology:

1. User's function returns `None` instead of result
2. **Debugger** doesn't give answer - asks diagnostic questions
3. User realizes they forgot the `return` statement
4. **Teacher** explains why this is a common mistake
5. User learns to prevent it in future!

---

## 📊 Success Metrics

### Innovation (30%)
✅ Multi-agent system - novel approach to AI tutoring  
✅ Proactive assistance - prevents mistakes, doesn't just fix them  
✅ Adaptive learning - personalized to user's style  
✅ Real-time pair programming - goes beyond Q&A

### Impact (25%)
✅ Accessibility: Free AI mentorship for solo learners  
✅ Scalability: One system serves unlimited students  
✅ Measurable improvement: Skill tree shows growth  
✅ Real problem: 80% of learners have no mentor

### Technical Excellence (25%)
✅ Sophisticated architecture: Multi-agent orchestration  
✅ Claude API mastery: Advanced prompt engineering  
✅ Real-time features: Live code analysis  
✅ Clean code: Well-documented, maintainable

### Usability (20%)
✅ Intuitive UI: Non-technical users can start immediately  
✅ Engaging: Feels like talking to a mentor, not a bot  
✅ Delightful: Unexpected moments of encouragement  
✅ Demo-able: Judges can try it in 2 minutes

---

## 🏆 Hackathon Information

**Track:** Student Track - AI for Learning & Developer Productivity  
**Event:** Anthropic Hackathon 2026  
**Team Size:** 2-4 developers  
**Build Time:** 48-72 hours

### Why DevMentor Wins

1. **Immediately Understandable** - Concept clear in 30 seconds
2. **Novel Technology** - Multi-agent system is cutting-edge (2025 trend)
3. **Clear Impact** - Democratizes mentorship for millions of learners
4. **Technically Impressive** - Real-time code analysis + agentic AI
5. **Great Story** - "I learned to code alone, wished I had this, so I built it"

---

## 🗺️ Roadmap

### ✅ MVP (Current)
- [x] Three distinct AI agents
- [x] Real-time code editor
- [x] Live chat interface
- [x] Mistake detection (50+ patterns)
- [x] Session memory
- [x] Basic progress tracking

### 🚧 Phase 2 (Next 3 Months)
- [ ] Multi-language support (JavaScript, Java, C++)
- [ ] Persistent cross-session memory
- [ ] Full skill tree (50+ nodes)
- [ ] Visual code flow diagrams
- [ ] Voice interaction mode
- [ ] Mobile app (React Native)

### 🔮 Future Vision
- [ ] Multiplayer coding sessions
- [ ] Video lessons integration
- [ ] Certification programs
- [ ] IDE plugins (VS Code, JetBrains)
- [ ] Corporate training packages
- [ ] AR/VR coding environments

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Built with ❤️ by passionate developers who believe everyone deserves access to quality programming mentorship.

**Contact:** [your-email@example.com](mailto:your-email@example.com)

---

## 🙏 Acknowledgments

- **Anthropic** for the Claude API and hackathon opportunity
- **Monaco Editor** team for the amazing code editor
- **Open source community** for inspiration and tools
- **Every solo learner** who inspired this project

---

## 🔗 Links

- **Live Demo:** [devmentor.vercel.app](#)
- **Documentation:** [Read the Docs](#)
- **API Reference:** [API Docs](#)
- **Blog Post:** [Building DevMentor](#)
- **Demo Video:** [YouTube](#)

---

<div align="center">

### 🌟 Star us on GitHub if you find DevMentor helpful!

**Never code alone again. Start your journey with DevMentor today.**

[Try Live Demo](#) | [View Documentation](#) | [Join Community](#)

---

**Made with 💡 innovation, 🔥 passion, and ☕ lots of coffee**

*Built for Anthropic Hackathon 2026 - Student Track: AI for Learning & Developer Productivity*

</div>
