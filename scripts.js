document.addEventListener('DOMContentLoaded', function () {
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
