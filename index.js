import React from "react";
import ReactDOM from "react-dom";
import ReduxComponent from "./src/ReduxComponent.js";
import { Provider } from "react-redux";
import {store} from './stores/ReduxStore';

ReactDOM.render(
  <Provider store={store}>
    <ReduxComponent />
  </Provider>,
  document.getElementById("root")
);
