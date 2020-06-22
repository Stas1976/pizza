import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import navigationReducer from "./navigation/navigationReducer";
import itemCartReducer from "./ItemsCart/items-cart-reducer";
import authReducer from "./auth/auth-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["itemCartReducer"]
};

const rootReducer = combineReducers({
  navigationReducer,
  itemCartReducer,
  authReducer
});

export default persistReducer(persistConfig, rootReducer);
