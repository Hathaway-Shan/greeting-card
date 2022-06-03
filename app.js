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