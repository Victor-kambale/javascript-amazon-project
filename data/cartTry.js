export const cartTry = [
  // {
  //   productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  //   quantity: 2,
  // },
];

// func addToCart method
export function addToCart() {
  let matchingItem;

  cartTry.forEach((cartItem) => {
    // check if product is already on cart
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }

    // is not then increase and push it
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cartTry.push({
        productId: productId,
        quantity: 1,
      });
    }
  });
}
