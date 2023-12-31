import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./components/App";
import GlobalStyles from "./styles/globals";
import { Provider } from "react-redux";
import generateStore from "./store/index";
import reportWebVitals from "./reportWebVitals";

const store = generateStore(); // Create the store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <AppContainer />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
