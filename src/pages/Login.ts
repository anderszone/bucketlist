const usernameField = document.querySelector<HTMLInputElement>("#username");
const form = document.querySelector("form");
const passwordField = document.querySelector<HTMLInputElement>("#password");
const btnTogglePassword = document.querySelector(".toggle-password");

function handlePasswordVisibility(): void {
    if (passwordField?.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
    }
    else {
        passwordField?.setAttribute("type", "password");
    }
}

function handleFormSubmit(event: Event): void {
    event.preventDefault(); // Stoppa omladdning
    const username = usernameField?.value ?? "";
    const password = passwordField?.value ?? "";
    
    if (username.length > 0 && password.length >= 4) {
        localStorage.setItem("username", username); // Spara till localStorage
        window.location.href = "dashboard.html"; // Skicka vidare till dashboard
    }
}

form?.addEventListener("submit", handleFormSubmit);

btnTogglePassword?.addEventListener("click", handlePasswordVisibility);
