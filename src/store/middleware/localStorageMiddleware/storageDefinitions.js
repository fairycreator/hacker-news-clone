import { actionTypes } from "../../app/actions";

const BASE_STORAGE_KEY = "@@hackerNewsReader/storage";
export const THEME_KEY = `${BASE_STORAGE_KEY}/theme`;
export const LAYOUT_KEY = `${BASE_STORAGE_KEY}/layout`;

/**
 * Defines how different actions trigger the persistence of specific parts of the application state.
 */
const storageDefinitions = {
  [actionTypes.SET_THEME]: [
    ({ action, saveState }) => {
      const themeState = action.payload.theme;
      saveState({ state: themeState, storageKey: THEME_KEY });
    },
  ],
  [actionTypes.SET_LAYOUT]: [
    ({ action, saveState }) => {
      const layoutState = action.payload.layout;
      saveState({ state: layoutState, storageKey: LAYOUT_KEY });
    },
  ],
};

export default storageDefinitions;
