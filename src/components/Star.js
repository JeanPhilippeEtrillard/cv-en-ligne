/**
 * Created by jphet on 23/05/2017.
 */
import React from "react";

export default class Star extends React.Component {
  constructor(props) {
    super(props);
  }

  isStarEnable(degCon, ref) {
    return degCon >= ref ? "starEnable" : "starDisable";
  }

  render() {
    const { degCon } = this.props;

    const star1 = "fas fa-star no-print " + this.isStarEnable(degCon, 1);
    const star2 = "fas fa-star no-print " + this.isStarEnable(degCon, 2);
    const star3 = "fas fa-star no-print " + this.isStarEnable(degCon, 3);
    const star4 = "fas fa-star no-print " + this.isStarEnable(degCon, 4);
    const star5 = "fas fa-star no-print " + this.isStarEnable(degCon, 5);

    return (
      <div className="star">
        <span class="fas fa-stack starEnable hidden">
          <i class="fas fa-star fa-stack-2x" />
          <span class="fas fa-stack-1x textStar">
            <span>
            {degCon}
            </span>
          </span>
        </span>

        <i className={star1} />
        <i className={star2} />
        <i className={star3} />
        <i className={star4} />
        <i className={star5} />
      </div>
    );
  }
}
