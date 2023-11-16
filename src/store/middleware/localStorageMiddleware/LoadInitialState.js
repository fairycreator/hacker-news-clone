import { THEME_KEY, LAYOUT_KEY } from "./storageDefinitions";
import loadState from "./loadState";

const loadInitialState = () => {
  const layout = loadState({ storageKey: LAYOUT_KEY });
  const theme = loadState({ storageKey: THEME_KEY });

  // Initialize app state only if layout or theme exists
  if (!layout && !theme) {
    return {};
  }

  return {
    app: {
      layout: layout || null, // Ensuring undefined values are replaced with null
      theme: theme || null,
    },
  };
};

export default loadInitialState;
