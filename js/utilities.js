//This is for input field
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldIdValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    if (isNaN(inputFieldIdValue)) {
        alert('Please provide a valid Number.');
        return;
    }

    return inputFieldIdValue;
}

//This is for deposit and withdraw
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const Value = parseFloat(elementValueString);
    return Value;
}

function setElementValueById(elementId, newBalance) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newBalance;
}
