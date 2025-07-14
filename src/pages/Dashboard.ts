document.addEventListener("DOMContentLoaded", function () {    
    const displayedUsername = document.querySelector("#user-name");
    const name = localStorage.getItem("username") ?? "Guest";

    if (displayedUsername) {
        displayedUsername.innerHTML = name;
    }
});
