const NS = "@hnClone/app";

export const actionTypes = {
  SET_THEME: `${NS}/SET_THEME`,
  SET_LAYOUT: `${NS}/SET_LAYOUT`,
};

const actions = {
  setTheme: (payload) => ({
    type: actionTypes.SET_THEME,
    payload,
  }),
  setLayout: (payload) => ({
    type: actionTypes.SET_LAYOUT,
    payload,
  }),
};

export default actions;
