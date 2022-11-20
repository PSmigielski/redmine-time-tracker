import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import {Router} from "./Router";

// document.addEventListener('contextmenu', e => {
//     e.preventDefault();
//     return false;
// }, { capture: true })
//
// document.addEventListener('selectstart', e => {
//     e.preventDefault();
//     return false;
// }, { capture: true })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>
);
