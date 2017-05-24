/**
 * Created by jphet on 23/05/2017.
 */
import React from "react";

export default class Star extends React.Component {
    constructor(props) {
        super(props);
    }

    isStarEnable(degCon, ref) {
        return (degCon >= ref ? "starEnable" : "starDisable");
    }

    render() {
        const {degCon} = this.props;

        const star1 = "fa fa-1 fa-star " + this.isStarEnable(degCon, 1);
        const star2 = "fa fa-1 fa-star " + this.isStarEnable(degCon, 2);
        const star3 = "fa fa-1 fa-star " + this.isStarEnable(degCon, 3);
        const star4 = "fa fa-1 fa-star " + this.isStarEnable(degCon, 4);
        const star5 = "fa fa-1 fa-star " + this.isStarEnable(degCon, 5);

        return <div className="star">
            <i className={star1}></i>
            <i className={star2}></i>
            <i className={star3}></i>
            <i className={star4}></i>
            <i className={star5}></i>
        </div>
    }
}