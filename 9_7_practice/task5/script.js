const duplicateField = document.getElementById('duplicateField');
const btnOutput = document.getElementById('btn_output');
const inputText = document.getElementById('input_text');

inputText.addEventListener('keyup', () => {
    duplicateField.textContent = inputText.value;
})

btnOutput.addEventListener('click', () => {
    const consoleValue = inputText.value;
    console.log(consoleValue);
    inputText.value = '';
    duplicateField.textContent = '';
})