document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.classList.toggle('active');
        content.classList.toggle('hidden');
        button.setAttribute('aria-expanded', !content.classList.contains('hidden'));
    });
});