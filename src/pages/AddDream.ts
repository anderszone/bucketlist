import { Dream } from "../models/Dream";

const addDreamForm = document.querySelector("form");
const inputField = document.querySelector<HTMLInputElement>("#dream");
const selectField = document.querySelector<HTMLSelectElement>("#dream-select");

function handleAddDream(event: Event): void {
    event.preventDefault();
    const storedDreams = localStorage.getItem("Dreams");
    const dreams: Dream[] = storedDreams ? JSON.parse(storedDreams) : [];
    const dream: Dream = {
        id: dreams.length + 1,
        name: inputField!.value,
        theme: selectField!.value,
        checked: false
    };
    dreams.push(dream);
    localStorage.setItem("Dreams", JSON.stringify(dreams));
    window.location.href = "dashboard.html";
}

addDreamForm?.addEventListener("submit", handleAddDream);
