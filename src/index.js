import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import "./scss/main.scss";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./layout/navigation/ScroollToTop/ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
