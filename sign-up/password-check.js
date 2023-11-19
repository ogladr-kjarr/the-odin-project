const firstPasswordField = document.querySelector("#password");
const secondPasswordField = document.querySelector("#confirm-password");


function arePasswordsEqual() {
    const isEqual = firstPasswordField.value.localeCompare(secondPasswordField.value) === 0;
    return isEqual;
}

function arePasswordsFilled() {
    const isNotEmpty = firstPasswordField.value.length !== 0 && secondPasswordField.value.length !== 0;
    return isNotEmpty;
}

function arePasswordsMarkedInError() {
    const areError = firstPasswordField.classList.contains('error');
    return areError;
}

function onPasswordChange() {

    if (arePasswordsEqual() && arePasswordsFilled()) {
        if (arePasswordsMarkedInError()) {
            firstPasswordField.classList.toggle("error");
            secondPasswordField.classList.toggle("error");
        }
    } else {
        if (!arePasswordsMarkedInError()){
            firstPasswordField.classList.toggle("error");
            secondPasswordField.classList.toggle("error");
        }
    }
}

function addPasswordChangeListener() {
    firstPasswordField.addEventListener("keyup", onPasswordChange);
    secondPasswordField.addEventListener("keyup", onPasswordChange);
}

addPasswordChangeListener();