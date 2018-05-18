/**
 * Created by jphet on 22/05/2017.
 */
import React from "react";

export default class CVItemComposent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { anneeDebut, anneeFin, titre, description, url } = this.props;
        var periode = undefined;
        if (anneeDebut != undefined) {
            periode = anneeDebut + " - ";
            if (anneeFin != undefined) {
                periode += anneeFin;
            } else {
                periode += "Aujourd'hui";
            }
        }

        return (<div className="cvItemDiv">
            <ManagePeriode periode={periode} />
            <div className="cvItemCInfo">
                <span className="cvItemCTitre">{titre} : </span>
                <span className="cvItemCDescription">{description}</span>
                <ManageUrl url={url} />
            </div>

        </div>);
    }
}

function ManagePeriode(props) {
    const { periode } = props;
    if (periode != undefined) {
        return <span className="cvItemCPeriode">{periode} </span>;
    }
    return <span></span>;
}
function ManageUrl(props) {
    const { url } = props;
    if (url != undefined) {
        return <span>
            <a href={url} className="cvItemCDescription" target="_blank">{url}</a>
        </span>;
    }
    return <span></span>
}