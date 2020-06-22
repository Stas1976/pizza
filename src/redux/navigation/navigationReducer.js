import * as types from "../types";

const initialState = {
  sideDrawer: false
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIDE_DRAWER_TOGGLE:
      return {
        ...state,
        sideDrawer: !state.sideDrawer
      };

    case types.SIDE_DRAWER_OFF:
      return {
        ...state,
        sideDrawer: false
      };
    default:
      return state;
  }
};

export default navigationReducer;
