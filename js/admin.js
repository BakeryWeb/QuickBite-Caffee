// admin.js
document.addEventListener("DOMContentLoaded", function () {
    const menuForm = document.getElementById("menu-form");

    menuForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Retrieve form data
        const itemName = document.getElementById("itemName").value;
        const itemDescription = document.getElementById("itemDescription").value;
        const itemPrice = document.getElementById("itemPrice").value;

        // Create a new menu item element
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.innerHTML = `
            <h3>${itemName}</h3>
            <p>${itemDescription}</p>
            <p>Price: $${itemPrice}</p>
        `;

        // Append the new menu item to the menu section (you'll need to create the menu section in your HTML)
        // Example: document.getElementById("menu").appendChild(menuItem);

        // Clear the form fields
        menuForm.reset();
    });
});
