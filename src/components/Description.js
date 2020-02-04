import React from "react";

export default class Description extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {titre, sousTitre, paragraphes} = this.props;
        const paragrapheItem                  = paragraphes.map(p => {
            return <p key={p} className="left-align">{p}</p>;
        })
        return <div className="description">
            <div className="left-align titre">{titre}</div>
            <div className="left-align sousTitre">{sousTitre}</div>
            {paragrapheItem}
        </div>;
    }
}
