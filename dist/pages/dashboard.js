document.addEventListener("DOMContentLoaded", function () {
    var _a;
    const dreamList = document.querySelector(".dream-list");
    const displayedUsername = document.querySelector("#user-name");
    const name = (_a = localStorage.getItem("username")) !== null && _a !== void 0 ? _a : "Guest";
    if (displayedUsername) {
        displayedUsername.innerHTML = name;
    }
    function handleDeleteDream(button, idToRemove) {
        const li = button.closest("li");
        li.remove();
        const storedDreams = localStorage.getItem("Dreams");
        const dreams = storedDreams ? JSON.parse(storedDreams) : [];
        const updatedDreams = dreams.filter(dream => dream.id !== idToRemove);
        localStorage.setItem("Dreams", JSON.stringify(updatedDreams));
    }
    const storedDreams = localStorage.getItem("Dreams");
    const dreams = storedDreams ? JSON.parse(storedDreams) : [];
    for (let dream of dreams) {
        const li = document.createElement("li");
        li.className = "dream-list_item";
        const input = document.createElement("input");
        input.className = "dream-check";
        input.type = "checkbox";
        input.name = "dream-check";
        input.id = `dream-check-${dream.id}`;
        input.checked = dream.checked;
        const label = document.createElement("label");
        label.htmlFor = `dream-check-${dream.id}`;
        label.innerHTML = `${dream.name}, <span class="dream-theme">${dream.theme}</span>`;
        const button = document.createElement("button");
        button.type = "button";
        const image = document.createElement("img");
        image.src = "../assets/images/trash_delete.png";
        button.appendChild(image);
        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);
        dreamList === null || dreamList === void 0 ? void 0 : dreamList.appendChild(li);
        button.addEventListener("click", () => handleDeleteDream(button, dream.id));
    }
});
export {};
//# sourceMappingURL=Dashboard.js.map