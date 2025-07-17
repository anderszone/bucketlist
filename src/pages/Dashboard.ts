import { Dream } from "../models/Dream";
import { themes } from "../utils/variables";

document.addEventListener("DOMContentLoaded", function () {  
    const dreamList = document.querySelector(".dream-list");
    const displayedUsername = document.querySelector("#user-name");
    const name = localStorage.getItem("username") ?? "Guest";

    if (displayedUsername) {
        displayedUsername.innerHTML = name;
    }

    function handleDeleteDream(button: HTMLButtonElement, idToRemove: number): void {
        const li = button.closest("li");
        li!.remove();
        const storedDreams = localStorage.getItem("Dreams");
        const dreams: Dream[] = storedDreams ? JSON.parse(storedDreams) : [];
        const updatedDreams = dreams.filter(dream => dream.id !== idToRemove);
        localStorage.setItem("Dreams", JSON.stringify(updatedDreams));
    }

    const storedDreams = localStorage.getItem("Dreams");
    const dreams: Dream[] = storedDreams ? JSON.parse(storedDreams) : [];

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
        dreamList?.appendChild(li);

        button.addEventListener("click", () => handleDeleteDream(button, dream.id));
    }
});
