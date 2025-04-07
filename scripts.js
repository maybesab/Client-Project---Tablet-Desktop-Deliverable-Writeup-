// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        const thisYear = new Date().getFullYear();
        yearSpan.textContent = thisYear;
    }
});
