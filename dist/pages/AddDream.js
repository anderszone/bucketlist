const addDreamForm = document.querySelector("form");
const inputField = document.querySelector("#dream");
const selectField = document.querySelector("#dream-select");
const themeError = document.querySelector("#theme-error-message");
const dreamError = document.querySelector("#dream-error-message");
function handleAddDream(event) {
    event.preventDefault();
    dreamError.style.display = inputField.value ? "none" : "block";
    themeError.style.display = selectField.value ? "none" : "block";
    if (inputField.value && selectField.value) {
        const storedDreams = localStorage.getItem("Dreams");
        const dreams = storedDreams ? JSON.parse(storedDreams) : [];
        const dream = {
            id: Date.now(),
            name: inputField.value,
            theme: selectField.value,
            checked: false
        };
        dreams.push(dream);
        localStorage.setItem("Dreams", JSON.stringify(dreams));
        // Visa konfirmeringsmeddelande
        const message = document.getElementById("confirmation-message");
        if (message) {
            message.textContent = "Din dröm har lagts till!";
            message.style.display = "block";
            // Dölj efter 3 sekunder
            setTimeout(() => {
                message.style.display = "none";
                window.location.href = "dashboard.html";
            }, 3000);
        }
        // Rensa formuläret
        inputField.value = "";
        selectField.value = "";
    }
}
addDreamForm === null || addDreamForm === void 0 ? void 0 : addDreamForm.addEventListener("submit", handleAddDream);
export {};
//# sourceMappingURL=AddDream.js.map