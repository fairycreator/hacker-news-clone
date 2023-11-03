import { configureStore } from "redux";
import reducer from "./reducer";
import middleware from "./middleware";

const createStore = (initialState) => {
  const store = configureStore(reducer, initialState, middleware);
  return store;
};

export default createStore;
