const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');
nameInput.addEventListener('input', () => {
    nameHeader.textContent = nameInput.value;
});
const firstSelect = document.getElementById("first-select");
firstSelect.addEventListener('change', () => {
    const src = firstSelect.value;
    chedder.src = src;
})
const backstoryInput = document.getElementById('backstory-input');
const backstoryDisplay = document.getElementById('backstory-display');
backstoryInput = document.addEventListener('input', () => {
    backstoryDisplay.textContent = backstoryInput.value;
})