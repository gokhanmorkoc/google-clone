import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataContextProvidr } from "./DataContext/DataContext";
import reducer, { initialState } from "./Reducer/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvidr reducer={reducer} initialState={initialState}>
      <App />
    </DataContextProvidr>
  </React.StrictMode>,
  document.getElementById("root")
);
