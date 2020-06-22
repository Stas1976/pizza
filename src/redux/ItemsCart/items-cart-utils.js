export const addItemsToTheCart = (itemsInCart, addItem) => {
  let existingCartItems = null;
  let existingCartPizza = null;

  if (addItem.type === "pizza") {
    existingCartPizza = itemsInCart.find(
      cartItem =>
        cartItem.name === addItem.name &&
        cartItem.pizzaSize === addItem.pizzaSize
    );
  } else if (addItem.type === "item") {
    existingCartItems = itemsInCart.find(
      cartItem => cartItem.name === addItem.name
    );
  }

  if (existingCartItems) {
    return itemsInCart.map(item =>
      item.name === addItem.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  if (existingCartPizza) {
    return itemsInCart.map(item =>
      item.name === addItem.name && item.pizzaSize === addItem.pizzaSize
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...itemsInCart, { ...addItem, quantity: 1 }];
};

//!*******************************************************
export const removeItemFromCart = (cart, itemToRemove) => {
  const existingItemInCart = cart.find(
    cartItem => cartItem.id === itemToRemove
  );

  if (existingItemInCart.quantity === 1) {
    return cart.filter(cartItem => cartItem.id !== itemToRemove);
  }

  return cart.map(cartItem =>
    cartItem.id === itemToRemove
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

//!*******************************************************

export const addOneMoreToCart = (cart, itemToAdd) => {
  return cart.map(cartItem =>
    cartItem.id === itemToAdd
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

//!*******************************************************

export const deleteItemFromCart = (cart, itemToDelete) => {
  const filteredCart = cart.filter(item => item.id !== itemToDelete);
  return filteredCart;
};
