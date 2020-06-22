import * as types from "../types";

export const resetCart = () => ({
  type: types.RESET_ITEMS_FROM_CART
});

export const submitOrder = payload => {
  return {
    type: types.SUBMIT_ORDER,
    payload
  };
};

export const addOneMoreToCart = payload => ({
  type: types.ADD_ONE_MORE_CART,
  payload
});

export const removeItemFromCart = payload => ({
  type: types.REMOVE_ITEM_FROM_CART,
  payload
});

export const deleteItemFromCart = payload => ({
  type: types.DELETE_ITEM_FROM_CART,
  payload
});

export const addItemToCart = payload => ({
  type: types.ADD_ITEM_TO_CART,
  payload
});

export const resetPizzaSize = () => ({
  type: types.RESET_PIZZA_SIZE
});

export const selectPizzaSize = payload => ({
  type: types.CURRENT_PIZZA_SIZE,
  payload
});

export const toggleModalOn = () => ({
  type: types.MODAL_TOGGLE_ON
});

export const toggleModalOff = () => ({
  type: types.MODAL_TOGGLE_OFF
});

export const selectedPizza = payload => ({
  type: types.SELECTED_PIZZA,
  payload
});

export const toggleInfoComponent = payload => ({
  type: types.INFO_ABOUT_PRODUCT,
  payload
});
