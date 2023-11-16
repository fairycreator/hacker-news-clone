import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import localStorageMiddleware from "store/middleware/localStorageMiddleware";
import storageDefinitions from "./localStorageMiddleware/storageDefinitions";

const isProd = process.env.NODE_ENV === "production";

// Initialize middleware array with mandatory middleware
const middlewareList = [
  thunk,
  localStorageMiddleware(storageDefinitions),
  // Include redux-logger only in non-production environments
  ...(!isProd ? [createLogger()] : []),
];

// Enhance compose for Redux DevTools in non-production environments
const composeEnhancers =
  (!isProd && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = composeEnhancers(applyMiddleware(...middlewareList));

export default middleware;
