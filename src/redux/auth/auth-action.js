import * as types from "../types";

export const setUser = payload => ({
  type: types.SET_USER,
  payload
});

export const signOut = () => ({ type: types.SIGN_OUT });
