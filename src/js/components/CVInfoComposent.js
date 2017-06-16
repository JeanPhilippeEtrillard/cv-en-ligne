/**
 * Created by jphet on 23/05/2017.
 */
import React from "react";

export default class CVInfoComposent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {infos}       = this.props;
        const infoComposent = infos.map((info) => {
            const {titre, url} = info;

            if (titre) {
                if (url) {
                    return <li key={titre}><span className="cvItemCTitre">{titre}</span>
                        <a href={url} className="cvItemCDescription" target="_blank">{url}</a>
                    </li>;
                }
            }
            return <li key={info}>{info}</li>;
        });
        return <ul className="cvInfo browser-default">
            {infoComposent}
        </ul>
    }
}
