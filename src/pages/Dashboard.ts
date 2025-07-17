import { Dream } from "../models/Dream";

// Säkerställer att sidan är laddad innan koden körs
document.addEventListener("DOMContentLoaded", function () {  
    
    // Hämtar element från DOM
    const dreamList = document.querySelector(".dream-list");
    const displayedUsername = document.querySelector("#user-name");
    const name = localStorage.getItem("username") ?? "Guest";

    // Uppdaterar användarnamnet i gränssnittet
    displayedUsername!.innerHTML = name;

    // Funktion för att hantera borttagning av drömmar
    function handleDeleteDream(button: HTMLButtonElement, idToRemove: number): void {
        
        // Hämtar närmaste listobjekt (li) och tar bort det från DOM
        const li = button.closest("li");
        li!.remove();

        // Hämtar drömmar från localStorage, filtrerar bort den borttagna drömmen och sparar listan i localStorage utan den borttagna drömmen
        const storedDreams = localStorage.getItem("Dreams");
        const dreams: Dream[] = storedDreams ? JSON.parse(storedDreams) : [];
        const updatedDreams = dreams.filter(dream => dream.id !== idToRemove);
        localStorage.setItem("Dreams", JSON.stringify(updatedDreams));
    }

    // Funktion för att hantera ändring av drömmars status (uppfylld/ej uppfylld)
    function handleToggleDream(idToUpdate: number, isChecked: boolean): void {

        // Hämtar drömmar från localStorage
        const storedDreams = localStorage.getItem("Dreams");
        const dreams: Dream[] = storedDreams ? JSON.parse(storedDreams) : [];

        // Uppdaterar den specifika drömmen
        const updatedDreams = dreams.map(dream => {
            if (dream.id === idToUpdate) {
                return { ...dream, checked: isChecked };
            }
            return dream;
        });

        // Sparar den uppdaterade listan av drömmar i localStorage
        localStorage.setItem("Dreams", JSON.stringify(updatedDreams));
    }

    // Hämtar drömmar från localStorage
    const storedDreams = localStorage.getItem("Dreams");
    const dreams: Dream[] = storedDreams ? JSON.parse(storedDreams) : [];

    // Loopar igenom drömmarna
    for (let dream of dreams) {
        
        // Skapar listobjekt för varje dröm
        const li = document.createElement("li");
        li.className = "dream-list_item";
        
        // Skapar input för varje dröm
        const input = document.createElement("input");
        input.className = "dream-check";
        input.type = "checkbox";
        input.name = "dream-check";
        input.id = `dream-check-${dream.id}`;
        input.checked = dream.checked;

        // Skapar label för varje dröm
        const label = document.createElement("label");
        label.htmlFor = `dream-check-${dream.id}`;
        label.innerHTML = `${dream.name}, <span class="dream-theme">${dream.theme}</span>`;

        // Skapar knapp för varje dröm
        const button = document.createElement("button");
        button.type = "button";

        // Skapar ikonen för borttagning
        const image = document.createElement("img");
        image.src = "../assets/images/trash_delete.png";

        // Lägger till alla element på rätt plats i DOM         
        button.appendChild(image);
        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);
        dreamList?.appendChild(li);

        // Lägger till eventlyssnare för borttagning och ändring av drömmars status
        button.addEventListener("click", () => handleDeleteDream(button, dream.id));
        input.addEventListener("change", () => handleToggleDream(dream.id, input.checked));
    }
});
