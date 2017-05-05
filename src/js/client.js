/**
 * Created by jphet on 15/03/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import createBrowserHistory from "history/createBrowserHistory";
import {BrowserRouter as Router} from "react-router-dom";

const history = createBrowserHistory()

const root = document.getElementById('root');

ReactDOM.render(
    <Router history={history}>
        <Layout/>
    </Router>
    , root
);