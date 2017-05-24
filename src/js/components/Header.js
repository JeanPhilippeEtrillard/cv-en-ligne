/**
 * Created by jphet on 15/03/2017.
 */
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return <header>
            <nav>
                <div class="nav-wrapper light-blue darken-2">
                    <NavLink to="/" activeClassName="brand-logo">Logo</NavLink>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/cv">CV</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>;
    }

}
