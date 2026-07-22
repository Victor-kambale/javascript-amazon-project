export const cart = [];

// func
export function addToCart(productId) {
  // Steps
  // [1. Check if the product is already in the cart]

  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // [2.  if its in the cart , increase the quantity] AND
  // [3.  if its not in the cart, add it to the cart.]

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}
