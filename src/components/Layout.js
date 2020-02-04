/**
 * Created by jphet on 15/03/2017.
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Accueil from "./Accueil";
import CV from "./CV";
import Contact from "./Contact";
import {Route} from "react-router-dom";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Route exact={true} path="/" component={Accueil}>
                </Route>
                <Route path="/cv" component={CV}>
                </Route>
                <Route path="/contact" component={Contact}>
                </Route>
                <Footer/>
            </div>);
    }

}