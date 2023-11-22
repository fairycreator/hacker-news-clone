import { combineReducers } from "redux";
import appReducer from "./app/reducer";
import storyReducer from "./story/reducer";

const rootReducer = combineReducers({
  app: appReducer,
  story: storyReducer,
});

export default rootReducer;
