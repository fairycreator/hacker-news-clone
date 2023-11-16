import hasLocalStorage from "./hasLocalStorage";
import loadState from "./loadState";
import saveState from "./saveState";

// A no-operation middleware used when localStorage is not available
const emptyMiddleware = () => (next) => (action) => next(action);

// Middleware to handle local caching based on defined storage actions
const localCacheMiddleware =
  (storageDefinitions) => (store) => (next) => (action) => {
    const result = next(action);
    const nextState = store.getState();

    // Retrieve the caching functions for the current action, if any
    const cacheHandlers = storageDefinitions[action.type];

    if (cacheHandlers) {
      // Ensure cacheHandlers is always an array
      const handlers = Array.isArray(cacheHandlers)
        ? cacheHandlers
        : [cacheHandlers];

      handlers.forEach((handler) =>
        handler({
          action,
          loadState,
          saveState,
          prevState: store.getState(),
          nextState,
          dispatch: store.dispatch,
        })
      );
    }

    return result;
  };

// Use localCacheMiddleware if localStorage is available, otherwise use emptyMiddleware
const localCache = hasLocalStorage() ? localCacheMiddleware : emptyMiddleware;

export default localCache;
