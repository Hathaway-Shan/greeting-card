//Name Event Listener
const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');
nameInput.addEventListener('input', () => {
    nameHeader.textContent = nameInput.value;
});
//Image Event Listener
const firstSelect = document.getElementById("first-select");
firstSelect.addEventListener('change', () => {
    const src = firstSelect.value;
    chedder.src = src;
})
//Backstory
const backstoryInput = document.getElementById('backstory-input');
const backstoryDisplay = document.getElementById('backstory-display');
backstoryInput.addEventListener('input', () => {
    backstoryDisplay.textContent = backstoryInput.value;
})
//Background Swapper
const secondSelect = document.getElementById('second-select');
const avatar = document.getElementById('dog-house');
secondSelect.addEventListener('change', () => {
    avatar.classList.value = '';
    avatar.classList.add(secondSelect.value);
})
//Export
const exportButton = document.getElementById('export-button');
exportButton.addEventListener('click', async () => {
  const dataUrl = await domtoimage.toPng(avatar);
  const link = document.createElement('a');
  link.download = nameInput.value + '.png';
  link.href = dataUrl;
  link.click();
});