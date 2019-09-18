import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./Components/App";
import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import reducer from "./Reducers/index";
import rootSaga from "./Sagas/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
