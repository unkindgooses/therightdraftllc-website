document.addEventListener('DOMContentLoaded', function () {
  // ── Hamburger menu ──
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('site-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when any link inside is clicked
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }


  const form = document.querySelector('.contact-form');
  if (!form) return;

  const message = document.createElement('div');
  message.className = 'form-message hidden';
  form.parentNode.insertBefore(message, form.nextSibling);

  form.addEventListener('submit', function (event) {
    const name = form.querySelector('[name="Name"]').value.trim();
    const firm = form.querySelector('[name="Firm"]').value.trim();
    const email = form.querySelector('[name="Email"]').value.trim();
    const text = form.querySelector('[name="Message"]').value.trim();

    if (!name || !firm || !email || !text) {
      event.preventDefault();
      showMessage('Please complete all fields before sending.', false);
      return;
    }

    showMessage('Submitting your inquiry…', true);
  });

  function showMessage(text, success) {
    message.textContent = text;
    message.classList.toggle('form-message--success', success);
    message.classList.toggle('form-message--error', !success);
    message.classList.remove('hidden');
  }
});
