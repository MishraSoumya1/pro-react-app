import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { rootReducer } from "./reducer";

export const history = createBrowserHistory();

const middleWares = [routerMiddleware(history), createSagaMiddleware()];

export const appDefaultState = {};

const store = createStore(
  rootReducer(),
  appDefaultState,
  compose(applyMiddleware(...middleWares))
);

export default store;
