import React from 'react';
import { 
  VictoryChart, 
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer 
} from 'victory';

const data = require('../data/flavorRiskinessToPerformance.json');

export default class BarchartExample extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: props.data || data,
      animate: props.animate,
      animating: false
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.animating && this.props.data !== prevProps.data) {
      this.setState({
        data: this.props.data,
        animating: true
      });
      setTimeout(() => this.setState({animating: false}), this.state.animate);
    }
  }

  getColor(controversy) {
    const gradient = ["#3D9900", "#5FA900", "#82B900", "#A5CA00", "#C8DA00", "#EBEB00", "#EFBC00", "#F38D00", "#F75E00", "#FB2E00", "#FF0000"];
    return gradient[Math.round(controversy * 10)];
  }

  getShape(performance) {
    if (performance == "GOOD")
      return "plus";
    if (performance == "BAD")
      return "minus";
    return "circle";
  }

  render() {
    return (
      <VictoryChart
        containerComponent={<VictoryVoronoiContainer/>}
        domain={{ x: [0, 1], y: [0, 100] }}
        theme={VictoryTheme.material}
      >
        <VictoryScatter
          data={this.state.data}
          labels={({ datum }) => datum.flavor}
          labelComponent={<VictoryTooltip pointerLength={0} />}
          size={2}
          style={{
            data: {
              fill: ({ datum }) => this.getColor(datum.controversy)
            },
            labels: {
              fontSize: 5
            }
          }}
          symbol={({ datum }) => this.getShape(datum.performance)}
          x="riskiness"
          y="count"
        />
      </VictoryChart>
    )
  }
}