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
      data: props.data || sampleData
    }

    console.log(!!props.data)
  }

  render() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
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