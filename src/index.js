import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"
import allReducers from "./Redux/allReducers"
import "bulma/css/bulma.css";
import "./styles.scss";
import { createStore, applyMiddleware } from "redux";
import {logger} from "redux-logger";



const store = createStore(allReducers, applyMiddleware (logger))
// console.log(store.getState()); 


const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store} >
    <App /></Provider>,
    rootElement);
