import ReactDOM from "react-dom";
import "./main.css";
import App from "./App.jsx";
import React from "react";
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
         <React.StrictMode>
<App />
</React.StrictMode>
</Provider>
, document.getElementById("root"));
