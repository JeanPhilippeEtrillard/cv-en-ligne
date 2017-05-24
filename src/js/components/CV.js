/**
 * Created by jphet on 20/04/2017.
 */
import React from "react";
import CVStore from "../store/CVStore";
import CVItems from "./CVItems";

export default class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cvSections: CVStore.getCvSections()
        }
    }

    render() {
        const {cvSections}       = this.state;
        const CVSectionComposent = cvSections.map((cv) => {
            return <CVItems key={cv.titre} {...cv} />;
        })
        return (
            <main>
                {CVSectionComposent}
            </main>
        );
    }

}
