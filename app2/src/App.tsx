import React from "react";
import ReactDOM from "react-dom";
import Visor from "./components/Visor";

import "./index.css";

const App = () => (
  <Visor />
);

ReactDOM.render(<App />, document.getElementById("app"));
