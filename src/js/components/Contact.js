/**
 * Created by jphet on 20/04/2017.
 */
import React from "react";

import FooterStore from "../store/FooterStore";

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mail    : FooterStore.getMail(),
            linkedin: FooterStore.getLinkedIn()
        }
    }

    render() {
        const mailing = "mailto:" + this.state.mail;
        return (
            <main>
                <div class="row">
                    <div class="col s4 offset-s4">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Contactez Moi</span>
                                <p>Vous pouvez me contacter soit par mail soit par linked-in en passant par les liens
                                    ci-dessous</p>
                            </div>
                            <div class="card-action center-align">
                                <a href={mailing}>
                                    <i className="fa fa-envelope"></i> Mail</a>
                                <a href={this.state.linkedin} target="_blank">
                                    <i className="fab fa-linkedin "></i> Linked-In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}
