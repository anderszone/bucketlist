const addDreamForm = document.querySelector("form");
const inputField = document.querySelector("#dream");
const selectField = document.querySelector("#dream-select");
function handleAddDream(event) {
    event.preventDefault();
    const storedDreams = localStorage.getItem("Dreams");
    const dreams = storedDreams ? JSON.parse(storedDreams) : [];
    const dream = {
        id: dreams.length + 1,
        name: inputField.value,
        theme: selectField.value,
        checked: false
    };
    dreams.push(dream);
    localStorage.setItem("Dreams", JSON.stringify(dreams));
    window.location.href = "dashboard.html";
}
addDreamForm === null || addDreamForm === void 0 ? void 0 : addDreamForm.addEventListener("submit", handleAddDream);
export {};
//# sourceMappingURL=AddDream.js.map