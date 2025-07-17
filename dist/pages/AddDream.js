// Hämta nödvändiga element från DOM
const addDreamForm = document.querySelector("form");
const inputField = document.querySelector("#dream");
const selectField = document.querySelector("#dream-select");
const themeError = document.querySelector("#theme-error-message");
const dreamError = document.querySelector("#dream-error-message");
// Funktion för att hantera tillägg av dröm
function handleAddDream(event) {
    // Förhindra att formuläret resulterar i en omladdning av sidan
    event.preventDefault();
    // Avgör om felmeddelanden ska visas - none om fälten är ifyllda - block om fälten är tomma
    dreamError.style.display = inputField.value ? "none" : "block";
    themeError.style.display = selectField.value ? "none" : "block";
    // Kollar om båda fälten är ifyllda
    if (inputField.value && selectField.value) {
        // Hämta befintliga drömmar från localStorage om dessa finns, skapar annars en tom array
        const storedDreams = localStorage.getItem("Dreams");
        const dreams = storedDreams ? JSON.parse(storedDreams) : [];
        // Skapa ett nytt Dream-objekt från användarens inmatningar
        const dream = {
            id: Date.now(),
            name: inputField.value,
            theme: selectField.value,
            checked: false
        };
        // Lägg till det nya Dream-objektet i arrayen och spara till localStorage
        dreams.push(dream);
        localStorage.setItem("Dreams", JSON.stringify(dreams));
        // Visa bekräftelsemeddelande
        const message = document.getElementById("confirmation-message");
        if (message) {
            message.textContent = "Din dröm har lagts till!";
            message.style.display = "block";
            // Dölj meddelandet efter 3 sekunder, och omdirigera till dashboard
            setTimeout(() => {
                message.style.display = "none";
                window.location.href = "dashboard.html";
            }, 3000);
        }
        // Rensa formulärfälten
        inputField.value = "";
        selectField.value = "";
    }
}
// Lägg till en eventlyssnare för formulärets submit-händelse
addDreamForm === null || addDreamForm === void 0 ? void 0 : addDreamForm.addEventListener("submit", handleAddDream);
export {};
//# sourceMappingURL=AddDream.js.map