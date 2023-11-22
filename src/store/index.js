import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import middleware from "./middleware/index";

const generateStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });

  return store;
};

export default generateStore;
