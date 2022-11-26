let basket = JSON.parse(localStorage.getItem("aca")) || [];
let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let calculation = () => {
    let cartIcon = document.getElementById("hero");
    cartIcon.innerHTML =basket.map((x)=> x.item).reduce((x,y)=> x + y, 0); 
};

calculation();

let generateCartItems = () => {
    if (basket.length !==0) {
        console.log("basket is not empty");

    } else {
        ShoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is empty<h2>
        <a href="index.html">
        <button class="HomeBtn">Back to home</button>
        </a>
        `
    }
};

generateCartItems();