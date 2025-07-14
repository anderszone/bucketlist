"use strict";
const usernameField = document.querySelector("#username");
const form = document.querySelector("form");
const passwordField = document.querySelector("#password");
const btnTogglePassword = document.querySelector(".toggle-password");
function handlePasswordVisibility() {
    if ((passwordField === null || passwordField === void 0 ? void 0 : passwordField.getAttribute("type")) === "password") {
        passwordField.setAttribute("type", "text");
    }
    else {
        passwordField === null || passwordField === void 0 ? void 0 : passwordField.setAttribute("type", "password");
    }
}
function handleFormSubmit(event) {
    var _a, _b;
    event.preventDefault(); // Stoppa omladdning
    const username = (_a = usernameField === null || usernameField === void 0 ? void 0 : usernameField.value) !== null && _a !== void 0 ? _a : "";
    const password = (_b = passwordField === null || passwordField === void 0 ? void 0 : passwordField.value) !== null && _b !== void 0 ? _b : "";
    if (username.length > 0 && password.length >= 4) {
        localStorage.setItem("username", username); // Spara till localStorage
        window.location.href = "dashboard.html"; // Skicka vidare till dashboard
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleFormSubmit);
btnTogglePassword === null || btnTogglePassword === void 0 ? void 0 : btnTogglePassword.addEventListener("click", handlePasswordVisibility);
//# sourceMappingURL=Login.js.map