import React from "react";
import ReactDOM from "react-dom";
import ProductCard from './components/ProductCard'

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ProductCard />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
