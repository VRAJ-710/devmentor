// ========================================
// DevMentor - Interactive Demo Script
// ========================================

// Simulated AI Agents
const agents = {
    teacher: {
        name: 'Teacher Agent',
        avatar: '🧑‍🏫',
        color: 'agent-teacher',
        responses: [
            "Great question! Before I help, can you tell me what approaches you've thought about?",
            "Excellent thinking! Let's break that down. What would you need to do in each loop iteration?",
            "Perfect! Now, what do you think will happen if the string is empty?",
            "I like your approach! Can you explain why you chose to use that method?",
            "Nice work! Let's think about edge cases. What if someone passes a number instead of a string?"
        ]
    },
    reviewer: {
        name: 'Code Review Agent',
        avatar: '👨‍💻',
        color: 'agent-reviewer',
        responses: [
            "⚠️ Quick thought: before you continue, consider what happens with empty strings.",
            "Good start! I noticed you're using a for loop. Have you thought about Python's slice notation?",
            "Nice variable naming! 👍 That makes your code very readable.",
            "⚠️ Heads up! You might want to add type checking before processing the input.",
            "Great! Your logic looks solid. Have you considered adding a docstring?"
        ]
    },
    debugger: {
        name: 'Debugging Agent',
        avatar: '🔍',
        color: 'agent-debugger',
        responses: [
            "Let's debug this together. First question: Did you add a return statement?",
            "Good catch! Now let's trace through what happens when text = 'hello'. What's the first character?",
            "Perfect debugging! This is exactly how professional developers work through problems.",
            "Let's add a print statement to see what's happening at each step. Try: print(f'Current: {char}')",
            "Excellent! You just debugged it yourself - that's real growth! 🎉"
        ]
    }
};

// Chat state
let chatMessages = [];
let currentAgentIndex = 0;
let isTyping = false;

// Code patterns to trigger specific agents
const codePatterns = {
    teacher: ['def ', 'class ', 'import ', '# '],
    reviewer: ['for ', 'while ', 'if ', '='],
    debugger: ['error', 'bug', 'not working', 'help']
};

// Get DOM elements
const codeEditor = document.getElementById('codeEditor');
const chatMessagesContainer = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendMessageBtn = document.getElementById('sendMessage');
const runCodeBtn = document.getElementById('runCode');
const explainCodeBtn = document.getElementById('explainCode');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    addWelcomeMessage();
    setupScrollAnimations();
});

// Event Listeners
function initializeEventListeners() {
    // Send message
    sendMessageBtn.addEventListener('click', handleSendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSendMessage();
    });

    // Code editor
    codeEditor.addEventListener('input', debounce(handleCodeChange, 1000));
    
    // Code actions
    runCodeBtn.addEventListener('click', handleRunCode);
    explainCodeBtn.addEventListener('click', handleExplainCode);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Welcome message
function addWelcomeMessage() {
    const welcomeMessage = {
        agent: 'teacher',
        text: "Welcome! I see you're working on reversing a string. Before we dive into code, can you explain to me: What does \"reverse\" mean in this context? What should the output look like?",
        timestamp: new Date()
    };
    addMessageToChat(welcomeMessage);
}

// Handle user message
function handleSendMessage() {
    const message = userInput.value.trim();
    if (!message || isTyping) return;

    // Add user message
    addUserMessage(message);
    userInput.value = '';

    // Determine which agent should respond
    const agentType = determineAgent(message);
    
    // Simulate thinking delay
    showTypingIndicator(agentType);
    
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateAgentResponse(agentType, message);
        addMessageToChat(response);
    }, 1500 + Math.random() * 1000);
}

// Add user message to chat
function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user-message';
    messageDiv.innerHTML = `
        <div class="message-avatar" style="background: var(--color-primary); color: white;">👤</div>
        <div class="message-content">
            <div class="message-header">
                <span class="message-name">You</span>
                <span class="message-time">Just now</span>
            </div>
            <div class="message-text">${escapeHtml(text)}</div>
        </div>
    `;
    chatMessagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

// Add agent message to chat
function addMessageToChat(message) {
    const agent = agents[message.agent];
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${agent.color}`;
    messageDiv.style.opacity = '0';
    messageDiv.innerHTML = `
        <div class="message-avatar">${agent.avatar}</div>
        <div class="message-content">
            <div class="message-header">
                <span class="message-name">${agent.name}</span>
                <span class="message-time">Just now</span>
            </div>
            <div class="message-text">${escapeHtml(message.text)}</div>
        </div>
    `;
    chatMessagesContainer.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.transition = 'opacity 0.4s ease';
        messageDiv.style.opacity = '1';
    }, 10);
    
    scrollToBottom();
    chatMessages.push(message);
}

// Determine which agent should respond
function determineAgent(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('error') || lowerMessage.includes('bug') || 
        lowerMessage.includes('help') || lowerMessage.includes('stuck')) {
        return 'debugger';
    }
    
    if (lowerMessage.includes('how') || lowerMessage.includes('what') || 
        lowerMessage.includes('why') || lowerMessage.includes('?')) {
        return 'teacher';
    }
    
    // Rotate through agents for variety
    const agentTypes = ['teacher', 'reviewer', 'debugger'];
    currentAgentIndex = (currentAgentIndex + 1) % agentTypes.length;
    return agentTypes[currentAgentIndex];
}

// Generate agent response
function generateAgentResponse(agentType, userMessage) {
    const agent = agents[agentType];
    const responseIndex = Math.floor(Math.random() * agent.responses.length);
    
    return {
        agent: agentType,
        text: agent.responses[responseIndex],
        timestamp: new Date()
    };
}

// Handle code changes
function handleCodeChange() {
    const code = codeEditor.value;
    
    // Check for common mistakes
    if (code.includes('list =') || code.includes('dict =') || code.includes('str =')) {
        const response = {
            agent: 'reviewer',
            text: "⚠️ Heads up! You're shadowing a Python built-in type. This will cause problems later. Try using 'my_list', 'my_dict', or a more descriptive name instead.",
            timestamp: new Date()
        };
        addMessageToChat(response);
    }
    
    // Check for missing colons
    const lines = code.split('\n');
    for (let line of lines) {
        if (line.trim().match(/^(if|elif|else|for|while|def|class)\s+.*[^:]$/)) {
            const response = {
                agent: 'reviewer',
                text: "❌ I noticed you might be missing a colon (:) at the end of a control statement. In Python, we need colons after if, for, while, def, and class statements.",
                timestamp: new Date()
            };
            addMessageToChat(response);
            break;
        }
    }
}

// Handle run code
function handleRunCode() {
    const code = codeEditor.value;
    
    if (!code.trim()) {
        const response = {
            agent: 'teacher',
            text: "I don't see any code yet! Let's start by defining a function. What do you want to name it?",
            timestamp: new Date()
        };
        addMessageToChat(response);
        return;
    }

    // Simulate code execution
    showRunningAnimation();
    
    setTimeout(() => {
        hideRunningAnimation();
        const response = {
            agent: 'debugger',
            text: "Great! Your code is syntactically correct. To actually run it, you'd need to call your function. Try adding: print(reverse_string('hello'))",
            timestamp: new Date()
        };
        addMessageToChat(response);
    }, 1000);
}

// Handle explain code
function handleExplainCode() {
    const code = codeEditor.value;
    
    if (!code.trim()) {
        const response = {
            agent: 'teacher',
            text: "Write some code first, and I'll help you understand it! Even if it's just a single line.",
            timestamp: new Date()
        };
        addMessageToChat(response);
        return;
    }

    const response = {
        agent: 'teacher',
        text: "I can see you're working on string reversal! Instead of just explaining the code, let me ask: Can you walk me through your logic? What's your approach here?",
        timestamp: new Date()
    };
    addMessageToChat(response);
}

// Typing indicator
function showTypingIndicator(agentType) {
    isTyping = true;
    const agent = agents[agentType];
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = `chat-message ${agent.color}`;
    typingDiv.innerHTML = `
        <div class="message-avatar">${agent.avatar}</div>
        <div class="message-content">
            <div class="message-text" style="font-style: italic; color: var(--color-text-lighter);">
                ${agent.name} is thinking
                <span class="typing-dots">
                    <span>.</span><span>.</span><span>.</span>
                </span>
            </div>
        </div>
    `;
    chatMessagesContainer.appendChild(typingDiv);
    scrollToBottom();
}

function hideTypingIndicator() {
    isTyping = false;
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

// Running animation
function showRunningAnimation() {
    runCodeBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="spinning">
            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5"/>
        </svg>
        Running...
    `;
    runCodeBtn.disabled = true;
}

function hideRunningAnimation() {
    runCodeBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 2L13 8L3 14V2Z" fill="currentColor"/>
        </svg>
        Run
    `;
    runCodeBtn.disabled = false;
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Utility functions
function scrollToBottom() {
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add spinning animation for loading states
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .spinning {
        animation: spin 1s linear infinite;
    }
    .typing-dots span {
        animation: typingDot 1.4s infinite;
    }
    .typing-dots span:nth-child(2) {
        animation-delay: 0.2s;
    }
    .typing-dots span:nth-child(3) {
        animation-delay: 0.4s;
    }
    @keyframes typingDot {
        0%, 60%, 100% { opacity: 0; }
        30% { opacity: 1; }
    }
    .user-message .message-avatar {
        background: var(--color-primary);
        color: white;
    }
    .user-message .message-text {
        background: var(--color-primary);
        color: white;
        padding: 0.75rem 1rem;
        border-radius: var(--radius-md);
        border-top-right-radius: 4px;
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🚀 DevMentor - Your AI Pair Programming Partner', 'font-size: 20px; font-weight: bold; color: #FF6B35;');
console.log('%cBuilt for Anthropic Hackathon 2026', 'font-size: 14px; color: #004E89;');
console.log('%c→ Student Track: AI for Learning & Developer Productivity', 'font-size: 12px; color: #6B6B80;');
