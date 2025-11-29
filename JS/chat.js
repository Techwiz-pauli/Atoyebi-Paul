
        // DOM Elements
        const chatbotToggle = document.querySelector('.chatbot-toggle');
        const chatbotWindow = document.querySelector('.chatbot-window');
        const chatbotClose = document.querySelector('.chatbot-close');
        const chatMessages = document.getElementById('chat-messages');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const suggestionChips = document.getElementById('suggestion-chips');
        
        // Chatbot state
        let isChatOpen = false;
        let contactFormActive = false;
        
        // Portfolio data - Update this with your actual information
        const portfolioData = {
            projects: [
                {
                    id: 1,
                    title: "E-commerce Platform",
                    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
                    technologies: ["React", "Node.js", "MongoDB"],
                    screenshot: "https://via.placeholder.com/300x200/627BFF/FFFFFF?text=E-commerce+Project",
                    link: "#"
                },
                {
                    id: 2,
                    title: "AI Image Recognition",
                    description: "Machine learning application that identifies objects in images with high accuracy.",
                    technologies: ["Python", "TensorFlow", "OpenCV"],
                    screenshot: "https://via.placeholder.com/300x200/D46CFF/FFFFFF?text=AI+Project",
                    link: "#"
                },
                {
                    id: 3,
                    title: "Mobile Fitness App",
                    description: "Cross-platform fitness tracking application with social features.",
                    technologies: ["React Native", "Firebase", "Redux"],
                    screenshot: "https://via.placeholder.com/300x200/627BFF/FFFFFF?text=Fitness+App",
                    link: "#"
                }
            ]
        };
        
        // Smart links - Update these with your actual links
        const smartLinks = {
            cv: "https://example.com/emahry-cv.pdf",
            github: "https://github.com/Atoyebi2000",
            linkedin: "https://linkedin.com/in/emahry",
            email: "mailto:atoyebiemmanuel795@gmail.com"
        };
        
        // Easter eggs
        const easterEggs = {
            jokes: [
                "Why do programmers prefer dark mode? Because light attracts bugs!",
                "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
                "Why do Java developers wear glasses? Because they can't C#!"
            ],
            quotes: [
                "The only way to do great work is to love what you do. - Steve Jobs",
                "Innovation distinguishes between a leader and a follower. - Steve Jobs",
                "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
            ],
            trivia: [
                "Emahry once coded for 36 hours straight to meet a deadline!",
                "Emahry's first programming language was Python.",
                "Emahry believes the best code is code that never has to be written."
            ]
        };
        
        // Toggle chatbot visibility
        chatbotToggle.addEventListener('click', () => {
            isChatOpen = !isChatOpen;
            chatbotWindow.classList.toggle('active', isChatOpen);
            
            if (isChatOpen) {
                // Show welcome message if it's the first time opening
                if (chatMessages.children.length === 0) {
                    addMessage("Hi, I'm Emahry's assistant, here to guide you! How can I help you today?", 'bot');
                }
            }
        });
        
        // Close chatbot
        chatbotClose.addEventListener('click', () => {
            isChatOpen = false;
            chatbotWindow.classList.remove('active');
        });
        
        // Send message on button click
        sendBtn.addEventListener('click', sendMessage);
        
        // Send message on Enter key
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Suggestion chips
        suggestionChips.addEventListener('click', (e) => {
            if (e.target.classList.contains('chip')) {
                const message = e.target.getAttribute('data-message');
                userInput.value = message;
                sendMessage();
            }
        });
        
        // Function to send a message
        function sendMessage() {
            const message = userInput.value.trim();
            if (message === '') return;
            
            // Add user message to chat
            addMessage(message, 'user');
            userInput.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Process the message after a short delay
            setTimeout(() => {
                processMessage(message);
            }, 1000);
        }
        
        // Function to add a message to the chat
        function addMessage(text, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
            messageElement.textContent = text;
            
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Remove typing indicator if it exists
            removeTypingIndicator();
        }
        
        // Function to show typing indicator
        function showTypingIndicator() {
            const typingElement = document.createElement('div');
            typingElement.classList.add('typing-indicator');
            typingElement.id = 'typing-indicator';
            typingElement.innerHTML = `
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            `;
            
            chatMessages.appendChild(typingElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        // Function to remove typing indicator
        function removeTypingIndicator() {
            const typingIndicator = document.getElementById('typing-indicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }
        
        // Function to process user messages
        function processMessage(message) {
            const lowerMessage = message.toLowerCase();
            
            // Handle specific commands
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
                addMessage("Hello! How can I assist you today?", 'bot');
            }
            else if (lowerMessage.includes('about') || lowerMessage.includes('who are you')) {
                showAboutInfo();
            }
            else if (lowerMessage.includes('portfolio') || lowerMessage.includes('project')) {
                showPortfolio();
            }
            else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('get in touch')) {
                showContactForm();
            }
            else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
                addMessage(`You can download my resume here: ${smartLinks.cv}`, 'bot');
            }
            else if (lowerMessage.includes('github')) {
                addMessage(`Here's my GitHub profile: ${smartLinks.github}`, 'bot');
            }
            else if (lowerMessage.includes('linkedin')) {
                addMessage(`Here's my LinkedIn profile: ${smartLinks.linkedin}`, 'bot');
            }
            else if (lowerMessage.includes('joke') || lowerMessage.includes('funny')) {
                const randomJoke = easterEggs.jokes[Math.floor(Math.random() * easterEggs.jokes.length)];
                addMessage(randomJoke, 'bot');
            }
            else if (lowerMessage.includes('quote') || lowerMessage.includes('motivation')) {
                const randomQuote = easterEggs.quotes[Math.floor(Math.random() * easterEggs.quotes.length)];
                addMessage(randomQuote, 'bot');
            }
            else if (lowerMessage.includes('trivia') || lowerMessage.includes('fact')) {
                const randomTrivia = easterEggs.trivia[Math.floor(Math.random() * easterEggs.trivia.length)];
                addMessage(randomTrivia, 'bot');
            }
            else if (lowerMessage.includes('best project') || lowerMessage.includes('recommend')) {
                recommendProject(lowerMessage);
            }
            else {
                // Use AI for general conversation
                getAIResponse(message);
            }
        }
        
        // Function to show about information
        function showAboutInfo() {
            const aboutText = "I'm Emahry, a passionate full-stack developer with expertise in modern web technologies. I specialize in creating responsive, user-friendly applications with clean code and intuitive design. My journey in tech started 5 years ago, and I've been constantly learning and growing ever since!";
            addMessage(aboutText, 'bot');
            
            setTimeout(() => {
                addMessage("My skills include: JavaScript, React, Node.js, Python, and much more. I'm always excited to take on new challenges and learn new technologies!", 'bot');
            }, 500);
        }
        
        // Function to show portfolio
        function showPortfolio() {
            addMessage("Here are some of my recent projects:", 'bot');
            
            portfolioData.projects.forEach(project => {
                setTimeout(() => {
                    const projectHTML = `
                        <div class="project-card">
                            <img src="${project.screenshot}" alt="${project.title}">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        </div>
                    `;
                    
                    const messageElement = document.createElement('div');
                    messageElement.classList.add('message', 'bot-message');
                    messageElement.innerHTML = projectHTML;
                    
                    chatMessages.appendChild(messageElement);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 500);
            });
        }
        
        // Function to show contact form
        function showContactForm() {
            addMessage("I'd love to hear from you! Please fill out this form and I'll get back to you soon.", 'bot');
            
            setTimeout(() => {
                const contactFormHTML = `
                    <div class="contact-form">
                        <input type="text" id="contact-name" placeholder="Your Name">
                        <input type="email" id="contact-email" placeholder="Your Email">
                        <textarea id="contact-message" placeholder="Your Message" rows="3"></textarea>
                        <button id="contact-submit">Send Message</button>
                    </div>
                `;
                
                const messageElement = document.createElement('div');
                messageElement.classList.add('message', 'bot-message');
                messageElement.innerHTML = contactFormHTML;
                
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Add event listener to the submit button
                document.getElementById('contact-submit').addEventListener('click', submitContactForm);
                
                contactFormActive = true;
            }, 500);
        }
        
        // Function to submit contact form
        function submitContactForm() {
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            
            if (!name || !email || !message) {
                addMessage("Please fill in all fields before submitting.", 'bot');
                return;
            }
            
            // In a real implementation, you would send this data to Formspree or your backend
            // For now, we'll just show a success message
            addMessage(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon.`, 'bot');
            
            contactFormActive = false;
        }
        
        // Function to recommend a project based on user interest
        function recommendProject(message) {
            let recommendedProject;
            
            if (message.includes('e-commerce') || message.includes('shopping') || message.includes('store')) {
                recommendedProject = portfolioData.projects[0];
            } else if (message.includes('ai') || message.includes('machine learning') || message.includes('ml')) {
                recommendedProject = portfolioData.projects[1];
            } else if (message.includes('mobile') || message.includes('fitness') || message.includes('health')) {
                recommendedProject = portfolioData.projects[2];
            } else {
                // Default recommendation
                recommendedProject = portfolioData.projects[0];
            }
            
            addMessage(`Based on your interest, I'd recommend checking out my "${recommendedProject.title}" project.`, 'bot');
            
            setTimeout(() => {
                const projectHTML = `
                    <div class="project-card">
                        <img src="${recommendedProject.screenshot}" alt="${recommendedProject.title}">
                        <h4>${recommendedProject.title}</h4>
                        <p>${recommendedProject.description}</p>
                        <p><strong>Technologies:</strong> ${recommendedProject.technologies.join(', ')}</p>
                    </div>
                `;
                
                const messageElement = document.createElement('div');
                messageElement.classList.add('message', 'bot-message');
                messageElement.innerHTML = projectHTML;
                
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 500);
        }
        
        // Function to get AI response (placeholder - you'll need to implement with your API key)
        function getAIResponse(message) {
            // This is a placeholder for the AI integration
            // In a real implementation, you would call the OpenAI API here
            
            // For demo purposes, we'll use some predefined responses
            const responses = [
                "That's an interesting question! As Emahry's assistant, I'm here to help you learn more about his work and skills.",
                "I'm not sure I understand. Could you rephrase that? Or maybe ask me about Emahry's projects or background?",
                "I specialize in information about Emahry's portfolio and experience. Is there something specific you'd like to know?",
                "Thanks for your message! I'm here to help you connect with Emahry and learn about his work."
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'bot');
            
            // Uncomment and implement with your actual API key:
            
            fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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'
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a helpful assistant representing Emahry, a skilled developer. Keep responses professional but friendly.'
                        },
                        {
                            role: 'user',
                            content: message
                        }
                    ]
                })
            })
            .then(response => response.json())
            .then(data => {
                const aiMessage = data.choices[0].message.content;
                addMessage(aiMessage, 'bot');
            })
            .catch(error => {
                console.error('Error calling AI API:', error);
                addMessage("I'm having trouble connecting right now. Please try again later.", 'bot');
            });
            
        }
