document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const subtotalSpan = document.getElementById("subtotal");
    const totalSpan = document.getElementById("total");
    const clearCartButton = document.getElementById("clear-cart");
    let subtotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            subtotal += price;
            const itemHTML = `<div>${name} - $${price.toFixed(2)} <button class="remove-item">¡Ya No!</button></div>`;
            cartItems.innerHTML += itemHTML;
            subtotalSpan.textContent = subtotal.toFixed(2);
            totalSpan.textContent = subtotal.toFixed(2);
        });
    });

    cartItems.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-item")) {
            const item = event.target.parentElement;
            const price = parseFloat(item.textContent.match(/\$\d+\.\d+/)[0].slice(1));
            subtotal -= price;
            subtotalSpan.textContent = subtotal.toFixed(2);
            totalSpan.textContent = subtotal.toFixed(2);
            item.remove();
        }
    });

    clearCartButton.addEventListener("click", function() {
        cartItems.innerHTML = "";
        subtotal = 0;
        subtotalSpan.textContent = "0.00";
        totalSpan.textContent = "0.00";
    });
});