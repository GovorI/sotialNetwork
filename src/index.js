import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderTree() {
  root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

renderTree();
// store.subscribe(() => {
//     renderTree()
// })
