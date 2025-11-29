const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
})

sr.reveal('.home-title', {} )
sr.reveal('.button', {delay: 200} )
sr.reveal('.home-img', {delay: 400} )
sr.reveal('.home-social', {delay: 400,} )

sr.reveal('.about-img', {} )
sr.reveal('.about-me', {delay: 200} )
sr.reveal('.about-subtitle2', {delay: 400} )
sr.reveal('.about-subtitle3', {delay: 500} )
sr.reveal('.about-subtitle4', {delay: 600} )
sr.reveal('.about-subtitle5', {delay: 800} )
sr.reveal('.about-subtitle6', {delay: 1000} )
sr.reveal('.about-subtitle7', {delay: 1200} )
sr.reveal('.about-subtitle8', {delay: 1400} )
sr.reveal('.about-subtitle9', {delay: 1800} )
sr.reveal('.about-subtitle10', {delay: 2000} )


sr.reveal('.skills-subtitle', {delay: 100} )
sr.reveal('.skills-text', {delay: 150} )
sr.reveal('.skills-data', {interval: 200} )
sr.reveal('.skills-img', {delay: 400} )

sr.reveal('.work-img', {interval: 200} )

sr.reveal('.contact-input', {interval: 200} )


    async function sendMessage() {
      const input = document.getElementById("userInput");
      const text = input.value.trim();
      if (!text) return;

      addMessage(text, "user-msg");
      input.value = "";

      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      addMessage(data.reply, "bot-msg");
    }

    function addMessage(msg, className) {
      const messages = document.getElementById("messages");
      const p = document.createElement("p");
      p.className = className;
      p.textContent = msg;
      messages.appendChild(p);
      messages.scrollTop = messages.scrollHeight;
    }



import { animate, stagger, text } from 'animejs';

const { chars } = text.split('h2', { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(50),
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});





