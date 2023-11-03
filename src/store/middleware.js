import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const isProduction = process.env.NODE_ENV === "production";
const middlewareList = [thunk];

if (!isProduction) {
  middlewareList.push(createLogger());
}

export default middlewareList;
