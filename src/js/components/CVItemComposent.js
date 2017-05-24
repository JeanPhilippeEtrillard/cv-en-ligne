/**
 * Created by jphet on 22/05/2017.
 */
import React from "react";

export default class CVItemComposent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {anneeDebut, anneeFin, titre, description} = this.props;
        var periode                                      = anneeDebut + " - ";
        if (anneeFin != undefined) {
            periode += anneeFin;
        } else {
            periode += "Aujourd'hui";
        }

        return <div className="cvItemDiv">
            <span className="cvItemCPeriode">{periode} </span>
            <div className="cvItemCInfo"><span className="cvItemCTitre">{titre} : </span>
                <span className="cvItemCDescription">{description}</span></div>
        </div>
    }
}
