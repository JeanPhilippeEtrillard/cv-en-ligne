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
            return <li key={info}>{info}</li>;
        });
        return <ul className="cvInfo browser-default">
            {infoComposent}
        </ul>
    }
}
