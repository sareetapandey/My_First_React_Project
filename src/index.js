import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routers } from "./router";
import { RouterProvider } from "react-router-dom";
import "./style/main.css";
import "./index.css";
import { AppContextProvider } from "./ContextApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// index.js or App.js
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCreditCard,
  faMoneyCheck,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCreditCard, faMoneyCheck, faMobileAlt);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={Routers} />
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
