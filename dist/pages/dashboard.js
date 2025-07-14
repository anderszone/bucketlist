"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    const displayedUsername = document.querySelector("#user-name");
    const name = (_a = localStorage.getItem("username")) !== null && _a !== void 0 ? _a : "Guest";
    if (displayedUsername) {
        displayedUsername.innerHTML = name;
    }
});
//# sourceMappingURL=Dashboard.js.map