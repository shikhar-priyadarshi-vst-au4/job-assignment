import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import { Provider } from "react-redux";
import { configureStore } from "./Redux/store";
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
