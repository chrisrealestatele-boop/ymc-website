document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const leadForm = document.getElementById('lead-form');
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    const action = leadForm.getAttribute('action') || '';
    if (action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      alert('Form not connected yet: replace YOUR_FORM_ID in index.html with your Formspree form ID (see README.md).');
    }
  });
}
