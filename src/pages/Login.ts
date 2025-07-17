// Hämta nödvändiga element från DOM
const usernameField = document.querySelector<HTMLInputElement>("#username");
const form = document.querySelector("form");
const passwordField = document.querySelector<HTMLInputElement>("#password");
const btnTogglePassword = document.querySelector(".toggle-password");

// Funktion för att hantera synlighet av lösenord (ögonikonen)
function handlePasswordVisibility(): void {
    if (passwordField?.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
    }
    else {
        passwordField?.setAttribute("type", "password");
    }
}

// Funktion för att hantera hur formuläret skickas
function handleFormSubmit(event: Event): void {
    
    // Stoppa omladdning av sidan när formuläret skickas
    event.preventDefault();

    // Hämta värden från inmatningsfält
    const username = usernameField?.value ?? "";
    const password = passwordField?.value ?? "";
    
    // Validera inmatning
    if (username.length > 0 && password.length >= 4) {
        
        // Spara användarnamn i localStorage
        localStorage.setItem("username", username); 
        
        // Omdirigera till dashboard efter lyckad inloggning
        window.location.href = "dashboard.html"; 
    }
}

// Lägg till eventlyssnare för formulärets submit-händelse och knappen för att växla lösenordssynlighet
form?.addEventListener("submit", handleFormSubmit);
btnTogglePassword?.addEventListener("click", handlePasswordVisibility);
