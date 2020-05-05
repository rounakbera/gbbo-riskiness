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
        {/* <circle 
          cx={radius} 
          cy={radius} 
          r={10} // diameter - 100
          fill={style.stroke}
          fill-opacity={style.strokeOpacity(this.props)}
        /> */}
        <RiskRewardPieChart 
          diameter={diameter}
          baker={datum.baker}
          standalone={false}
        />
      </g>
    );
  }
}