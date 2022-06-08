function getPin() {
    const fiveDigitPin = Math.random() * 100000;

    if (fiveDigitPin > 9999) {
        return parseInt(fiveDigitPin);
    }
    else {
        return getPin();
    }
}
// pin generate field 
document.getElementById("pin-generate-btn").addEventListener("click", function () {
    const generatePinField = document.getElementById("pin-generate-field");
    let pin = getPin();
    generatePinField.value = pin;

})


// pin input field 
document.getElementById("calculator-input").addEventListener('click', function (event) {
    const pinInputField = document.getElementById("pin-input-field");
    let previousInput = pinInputField.value;
    let newInput = event.target.innerText;
    if (!isNaN(newInput)) {
        pinInputField.value = previousInput + newInput;
    }
    else {
        if (newInput == 'C') {
            pinInputField.value = "";
        }
    }

})

// clicking submit button 
document.getElementById("submit-btn").addEventListener("click", function () {
    const pinInputField = document.getElementById("pin-input-field");
    const generatePinField = document.getElementById("pin-generate-field");
    const pinWrong = document.getElementById("pin-wrong");
    const pinRight = document.getElementById("pin-right");
    if (pinInputField.value == generatePinField.value) {
        pinWrong.style.display = "none";
        pinRight.style.display = "block";
    }
    else {
        pinWrong.style.display = "block";
        pinRight.style.display = "none";
    }
})