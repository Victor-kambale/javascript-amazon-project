// MAIN IDEA OF JAVASCRIPT

// == ✅✊👌 I. SAVE DATE == //
// create object inside array
// const products = [
//   // 1 object
//   {
//     image: "images/products/athletic-cotton-socks-6-pairs.jpg",
//     name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating: {
//       stars: 4.5,
//       count: 87,
//     },
//     priceCents: 1090,
//   },
//   // 2 object
//   {
//     image: "images/products/intermediate-composite-basketball.jpg",
//     name: "Intermediate Size Basketball",
//     rating: {
//       stars: 4,
//       count: 127,
//     },
//     priceCents: 2095,
//   },
//   // 3 object
//   {
//     image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     name: "Adults Plain Cotton T-Shirt - 2 Pack",
//     rating: {
//       stars: 4.5,
//       count: 56,
//     },
//     priceCents: 799,
//   },
//   // 4 object
//   {
//     image: "images/products/black-2-slot-toaster.jpg",
//     name: "Black 2-Slot Toaster",
//     rating: {
//       stars: 5,
//       count: 2197,
//     },
//     priceCents: 1899,
//   },
// ];

// == ✅✊👌 II. GENERATE HTML [-combine this html together, -put it on the web page] == //

// -combine this html together,

import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>
  `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

// func
function updateCartQuantity() {
  // [1. Calculate the quantity.]
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  // [2. Put the quantity on the page. by using the DOM]
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

// === ✅✊👌 III. MAKE IT INTERACTIVE === //
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    // call function addToCart()
    addToCart(productId);
    // call function updateCartQuantity()
    updateCartQuantity();
  });


  
});

// STOP AND DONE (LESSON 13) 12:27:59 ✅✊

// ================================================  //
// START (LESSON 14) MODULES: ➡️ 12: 28 until 13: 56: 34

// STOP 13:00:00
