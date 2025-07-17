"use strict";
// Hämta nödvändiga element från DOM
const usernameField = document.querySelector("#username");
const form = document.querySelector("form");
const passwordField = document.querySelector("#password");
const btnTogglePassword = document.querySelector(".toggle-password");
// Funktion för att hantera synlighet av lösenord (ögonikonen)
function handlePasswordVisibility() {
    if ((passwordField === null || passwordField === void 0 ? void 0 : passwordField.getAttribute("type")) === "password") {
        passwordField.setAttribute("type", "text");
    }
    else {
        passwordField === null || passwordField === void 0 ? void 0 : passwordField.setAttribute("type", "password");
    }
}
// Funktion för att hantera hur formuläret skickas
function handleFormSubmit(event) {
    var _a, _b;
    // Stoppa omladdning av sidan när formuläret skickas
    event.preventDefault();
    // Hämta värden från inmatningsfält
    const username = (_a = usernameField === null || usernameField === void 0 ? void 0 : usernameField.value) !== null && _a !== void 0 ? _a : "";
    const password = (_b = passwordField === null || passwordField === void 0 ? void 0 : passwordField.value) !== null && _b !== void 0 ? _b : "";
    // Validera inmatning
    if (username.length > 0 && password.length >= 4) {
        // Spara användarnamn i localStorage
        localStorage.setItem("username", username);
        // Omdirigera till dashboard efter lyckad inloggning
        window.location.href = "dashboard.html";
    }
}
// Lägg till eventlyssnare för formulärets submit-händelse och knappen för att växla lösenordssynlighet
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleFormSubmit);
btnTogglePassword === null || btnTogglePassword === void 0 ? void 0 : btnTogglePassword.addEventListener("click", handlePasswordVisibility);
//# sourceMappingURL=Login.js.map