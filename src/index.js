import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderTree() {
  root.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
}

renderTree();
// store.subscribe(() => {
//     renderTree()
// })
