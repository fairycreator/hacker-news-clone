import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import middleware from "./middleware";

const generateStore = (initialState) => {
  const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });

  return store;
};

export default generateStore;
