import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StateProvider } from "./contextAPI/StateProvider";
import reducer, { initialState } from "./contextAPI/reducer";

import App from "./Components/App";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
