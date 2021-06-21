import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import QuizApp from "./QuizApp";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./modules";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <QuizApp />
  </Provider>,
  document.getElementById("root") || document.createElement("div")
);
