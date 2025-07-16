import { Dream } from "../models/Dream";
import { themes } from "../utils/variables";

document.addEventListener("DOMContentLoaded", function () {  
    const dreamList = document.querySelector(".dream-list");
    const displayedUsername = document.querySelector("#user-name");
    const name = localStorage.getItem("username") ?? "Guest";

    if (displayedUsername) {
        displayedUsername.innerHTML = name;
    }

    // const dreams: Dream[] = [{
    //     id: 1,
    //     name: "Lära mig HTML/CSS",
    //     theme: "teknikdrömmar",
    //     checked: true
    // },
    // {
    //     id: 2,
    //     name: "Lära mig TypeScript",
    //     theme: "teknikdrömmar",
    //     checked: false
    // },
    // {
    //     id: 3,
    //     name: "En dröm som tar flera rader lorem ipsum",
    //     theme: "vardagsdrömmar",
    //     checked: false
    // }
    // ]

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
    }
});
