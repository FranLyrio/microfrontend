import React from "react";
import ReactDOM from "react-dom";
import { countStore } from "./app1Remote";
import { Visor } from "./components/Visor";

import "./index.css";

const App = () => {
  const value = countStore(state => state.value);
  const inc = countStore(state => state.inc);
  const dec = countStore(state => state.dec);

  return (
   <>
     <h1>{value}</h1>
      <button onClick={inc}>Adicionar</button>
      <button onClick={dec}>Subtrair</button>

      <Visor />
   </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
