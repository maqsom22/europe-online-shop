document.addEventListener("DOMContentLoaded", function () {

    let cart = [];

    const cartCountElement = document.getElementById("cart-count");
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    const products = [
        {
            name: "Product 1",
            price: 25000
        },
        {
            name: "Product 2",
            price: 30000
        },
        {
            name: "Product 3",
            price: 35000
        }
    ];

    const cartButtons = document.querySelectorAll(".product-card button");

    cartButtons.forEach(function (button, index) {

        button.addEventListener("click", function () {

            cart.push({
                product: products[index],
                quantity: 1
            });

            updateCart();

        });

    });

    function updateCart() {

        cartCountElement.textContent = cart.reduce(
            (total, item) => total + item.quantity, 0
        );

        cartItemsElement.innerHTML = "";

        let total = 0;

        cart.forEach(function (item, index) {

            const div = document.createElement("div");

            div.innerHTML = `
                <p>
                    <strong>${item.product.name}</strong>
                    - ${item.product.price.toLocaleString()} IQD
                </p>

                <button onclick="decreaseQuantity(${index})">−</button>

                <span> ${item.quantity} </span>

                <button onclick="increaseQuantity(${index})">+</button>

                <button onclick="removeItem(${index})">🗑️</button>
            `;

            cartItemsElement.appendChild(div);

            total += item.product.price * item.quantity;
        });

        cartTotalElement.textContent = total.toLocaleString();
    }

    window.increaseQuantity = function (index) {
        cart[index].quantity++;
        updateCart();
    };

    window.decreaseQuantity = function (index) {

        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }

        updateCart();
    };

    window.removeItem = function (index) {
        cart.splice(index, 1);
        updateCart();
    };

});const searchInput = document.getElementById("search-input");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    productCards.forEach(function (card) {

        const productName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (productName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});function toggleMenu() {
    document.querySelector("nav").classList.toggle("show");
}