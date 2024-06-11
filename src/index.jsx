import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store.jsx";
import { Provider } from "react-redux";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tap="home" />
  </Provider>
);
