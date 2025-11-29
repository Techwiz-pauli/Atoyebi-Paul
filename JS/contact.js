// js/contact.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('https://formspree.io/f/movngwov', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      if (res.ok) alert('Message sent — thanks!');
      else alert('Could not send message.');
    } catch (err) {
      alert('Network error.');
    }
  });
});
