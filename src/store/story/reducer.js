import { actionTypes } from "./actions";

const initialState = {
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: "",
};

const storyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${actionTypes.FETCH_STORY_IDS}_REQUEST`:
    case `${actionTypes.FETCH_STORIES}_REQUEST`:
      return {
        ...state,
        isFetching: true,
        error: " ", 
      };
    case `${actionTypes.FETCH_STORY_IDS}_SUCCESS`:
      const { storyIds } = payload;
      return {
        ...state,
        storyIds,
        isFetching: false,
      };
    case `${actionTypes.FETCH_STORIES}_SUCCESS`:
      const { stories } = payload;
      return {
        ...state,
        stories: [...state.stories, ...stories],
        page: state.page + 1,
        isFetching: false,
      };
    case `${actionTypes.FETCH_STORY_IDS}_FAILURE`:
    case `${actionTypes.FETCH_STORIES}_FAILURE`:
      const { error } = payload;
      return {
        ...state,
        isFetching: false,
        error, 
      };
    default:
      return state;
  }
};

export default storyReducer;
