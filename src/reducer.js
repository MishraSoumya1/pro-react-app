import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { createReducer } from "redux-act";
import { history } from "./store";

const location = {
  ["@@router/LOCATION_CHANGE"]: (state, action) => ({
    ...state,
    currentLocation: history.location.pathname,
  }),
};

const locationInitialState = {};

const locationReducer = createReducer(location, locationInitialState);

export const appReducer = (state, action) =>
  combineReducers({
    router: connectRouter(history),
    locationReducer,
  });

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
