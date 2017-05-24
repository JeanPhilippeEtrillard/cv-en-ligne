/**
 * Created by jphet on 20/04/2017.
 */
import React from "react";
import AccueilStore from "../store/AccueilStore";
import Description from "./Description";

export default class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image      : AccueilStore.getImage(),
            description: AccueilStore.getDescription()
        };
    }

    render() {
        const {description} = this.state;

        const DescriptionComponents = description.map((desc) => {
            return <Description key={desc.titre} {...desc}/>;
        })
        const image                 = "css/img/" + this.state.image;
        return (
            <main>
                <div className="row">
                    <div className="col s6 center-align">
                        <img className="photoAccueil" src={image}/>
                    </div>
                    <div className="col s6 center-align">
                        {DescriptionComponents}
                    </div>

                </div>
            </main>
        );
    }

}