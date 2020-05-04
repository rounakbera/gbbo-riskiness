import React from 'react';
import { 
  VictoryPie
} from 'victory';
import RiskRewardPieChart from './RiskRewardPieChart';

export default class PieChartPointWrapper extends React.Component {
  render() {
    const {datum, x, y} = this.props;
    const diameter = 100 + 6; // nothing <= 100 is visible

    return (
      <g transform={
        `translate(${x - diameter / 2}, ${y - diameter / 2})`
        }
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