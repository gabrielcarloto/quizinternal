const options = document.querySelectorAll('.option');
const inputs = document.querySelectorAll('input[type="radio"]');
options.forEach((option) => option.addEventListener('click', () => {
    const input = option.querySelector('input[type="radio"]');
    if (!input)
        return console.warn('Cade o input?????');
    input.click();
}));
inputs.forEach((input) => input.addEventListener('click', (e) => {
    localStorage.setItem('question-1-answer', input.value);
}));
