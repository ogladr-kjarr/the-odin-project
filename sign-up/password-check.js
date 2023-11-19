const firstPasswordField = document.querySelector("#password");
const secondPasswordField = document.querySelector("#confirm-password");
const passwordLabel = document.querySelector(".password-label");


function arePasswordsEqual() {
    const areEqual = firstPasswordField.value.localeCompare(secondPasswordField.value) === 0;
    return areEqual;
}

function arePasswordsFilled() {
    const areNotEmpty = firstPasswordField.value.length !== 0 && secondPasswordField.value.length !== 0;
    return areNotEmpty;
}

function arePasswordsMarkedInError() {
    const areErrorMarked = firstPasswordField.classList.contains('error');
    return areErrorMarked;
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