import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import middleware from "./middleware/index";

const generateStore = (initialState) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });

  return store;
};

export default generateStore;
