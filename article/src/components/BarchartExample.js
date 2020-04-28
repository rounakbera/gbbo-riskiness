import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme 
} from 'victory';

const sampleData = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

export default class BarchartExample extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: props.data || sampleData,
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

  render() {
    return (
      <VictoryChart
        animate={{ duration: this.state.animate }}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          domain={[0, 20000]}
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={this.state.data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    )
  }
}
