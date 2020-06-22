import * as types from "../types";

const INITIAL_STATE = {
  user: null
};

const autReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload };

    case types.SIGN_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default autReducer;
