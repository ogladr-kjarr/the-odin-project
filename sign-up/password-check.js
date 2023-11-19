const firstPasswordField = document.querySelector("#password");
const secondPasswordField = document.querySelector("#confirm-password");
const passwordLabel = document.querySelector(".password-label");


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

function toggleStyling() {
    firstPasswordField.classList.toggle("error");
    secondPasswordField.classList.toggle("error");
    passwordLabel.classList.toggle("password-label");
}

function onPasswordChange() {

    if (arePasswordsEqual() && arePasswordsFilled()) {
        if (arePasswordsMarkedInError()) {
            toggleStyling();
        }
    } else {
        if (!arePasswordsMarkedInError()){
            toggleStyling();
        }
    }
}

function addPasswordChangeListener() {
    firstPasswordField.addEventListener("keyup", onPasswordChange);
    secondPasswordField.addEventListener("keyup", onPasswordChange);
}

addPasswordChangeListener();