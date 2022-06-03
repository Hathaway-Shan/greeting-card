const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');
nameInput.addEventListener('input', () => {
    nameHeader.textContent = nameInput.value;
});