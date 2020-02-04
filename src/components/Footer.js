/**
 * Created by jphet on 15/03/2017.
 */
import React from "react";

import FooterStore from "../store/FooterStore";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail    : FooterStore.getMail(),
            linkedin: FooterStore.getLinkedIn()
        };
    }

    render() {
        const mailing = "mailto:" + this.state.mail;
        return <footer className="page-footer z-depth-2 light-blue darken-1 no-print">
            <div className="footer-copyright light-blue darken-2">
                <div className="row">
                    <div className="col s10">
                        <i className="fa fa-copyright"></i> 2018 Jean-Philippe ETRILLARD [tous droits réservés]
                    </div>
                    <div className="col s2">
                        <ul className="right">
                            <li><a href={mailing}>
                                <i className="fa fa-envelope"></i></a></li>
                            <li>
                                <a href={this.state.linkedin} target="_blank">
                                    <i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
            ;
    }

}