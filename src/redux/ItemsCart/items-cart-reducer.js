import * as types from "../types";
import {
  addItemsToTheCart,
  deleteItemFromCart,
  removeItemFromCart,
  addOneMoreToCart
} from "./items-cart-utils";

const initialState = {
  modalState: false,
  selectedPizza: {},
  infoComponentState: false,
  currentPizzaSize: "small",
  cart: [],
  order: {}
};

const itemsCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_ITEMS_FROM_CART:
      return {
        ...state,
        cart: []
      };

    case types.SUBMIT_ORDER:
      return {
        ...state,
        order: action.payload
      };

    case types.ADD_ONE_MORE_CART:
      return {
        ...state,
        cart: addOneMoreToCart(state.cart, action.payload)
      };

    case types.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cart: deleteItemFromCart(state.cart, action.payload)
      };

    case types.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload)
      };

    case types.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: addItemsToTheCart(state.cart, action.payload)
      };

    case types.RESET_PIZZA_SIZE:
      return {
        ...state,
        currentPizzaSize: "small"
      };

    case types.CURRENT_PIZZA_SIZE:
      return {
        ...state,
        currentPizzaSize: action.payload
      };

    case types.INFO_ABOUT_PRODUCT:
      return {
        ...state,
        infoComponentState: !state.infoComponentState
      };

    case types.MODAL_TOGGLE_ON:
      return {
        ...state,
        modalState: true
      };

    case types.MODAL_TOGGLE_OFF:
      return {
        ...state,
        modalState: false
      };

    case types.SELECTED_PIZZA:
      return {
        ...state,
        selectedPizza: action.payload
      };

    default:
      return state;
  }
};

export default itemsCartReducer;
