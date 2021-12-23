import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import IntlWrapper from "./components/intlWrapper/IntlWrapper";
import App from "./App";
import store from "./store";

import { history } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <IntlWrapper>
        <App />
      </IntlWrapper>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
