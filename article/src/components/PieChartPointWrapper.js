import React from 'react';
import RiskRewardPieChart from './RiskRewardPieChart';

export default class PieChartPointWrapper extends React.Component {
  render() {
    const {datum, x, y, style} = this.props;
    const diameter = 100 + 20; // nothing <= 100 is visible
    const radius = diameter / 2;

    return (
      <g 
        opacity={ style.strokeOpacity(this.props) }
        transform={ `translate(${x - radius}, ${y - radius})` }
      >
        <RiskRewardPieChart 
          diameter={diameter}
          baker={datum.baker}
          standalone={false}
        />
      </g>
    );
  }
}