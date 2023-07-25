import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import appReducer from "./reducer";

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
});

export default rootReducer;
