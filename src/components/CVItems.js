/**
 * Created by jphet on 15/05/2017.
 */
import React from "react";
import CVItemComposent from "./CVItemComposent";
import CVInfoComposent from "./CVInfoComposent";
import CVSkillComposent from "./CVSkillComposent";

export default class CVItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {icon, titre, couleur, items, infos, skills} = this.props;
        const iconCss                                      = "iconTitre center-align fa fa-3x fa-" + icon;
        const sectionCss                                   = {color: couleur};
        const dividerCss                                   = {backgroundColor: couleur};
        var itemsComposents                                = [];
        if (items != undefined) {
            itemsComposents.push(items.map((item) => {
                return <CVItemComposent key={item.description} {...item}/>;
            }));
        }
        if (skills != undefined) {
            itemsComposents.push(React.createElement('div', {
                    className: "cvSkill"
                },
                skills.map((skill) => {
                    return <CVSkillComposent key={skill.titre} {...skill}/>;
                })));
        }
        if (infos != undefined) {
            itemsComposents.push(<CVInfoComposent infos={infos}/>);

        }

        return <div className="row cvItem">
            <div className="col s12">
                <div className="section cvSection" style={sectionCss}>
                    <i className={iconCss}> </i> <span className="cvTitre hide-on-small-only">{titre}</span>
                </div>
                <div class="divider" style={dividerCss}></div>
                <div className="cvItems">{itemsComposents}</div>
            </div>
        </div>
    }
}