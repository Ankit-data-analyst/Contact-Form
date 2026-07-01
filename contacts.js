const nameInput = document.getElementById('nameInput');
const numberInput = document.getElementById('numberInput');
const button = document.getElementById('displayBtn');
const displayMessage = document.getElementById('displayMessage')

button.addEventListener('click', () => {
    const nameValue = nameInput.value;
    const numberValue = numberInput.value;
    if(numberValue.length==10)
        displayMessage.innerHTML = 'Valid Phone Number'
    else
        displayMessage.innerHTML = 'Invalid Phone Number'
});
