import actions from "./actions";

const getInitialState = () => ({
  theme: "dark",
});

const appReducer = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actions.SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default appReducer;
