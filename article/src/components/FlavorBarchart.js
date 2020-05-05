import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryLine
} from 'victory';

const data = require('../data/bakerAvgFlavors.json');

export default class FlavorBarchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: props.displayInfo,
      showRegression: this.props.showRegression,
      animate: props.animate,
      animating: false
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.animating && this.props !== prevProps) {
      this.setState({
        displayInfo: this.props.displayInfo,
        showRegression: this.props.showRegression,
        animating: true
      });
      setTimeout(() => this.setState({animating: false}), this.state.animate);
    }
  }

  getBakerDisplayInfo(baker, displayInfo) {
    return displayInfo[baker];
  }

  getDataWithDisplayInfo(displayInfo) {
    return data.map((datum) => {
      return {
        ...datum,
        "flavors": displayInfo[datum.baker] ? datum.nflavors : 0
      };
    });
  }

  render() {
    return (
      <VictoryChart
        animate={{ duration: this.state.animate }}
        theme={VictoryTheme.material}
        domainPadding={1}
      >
        <VictoryAxis
          label="Baker"
          style={{
            axisLabel: {
              fontSize: 15,
              padding: 35
            },
            tickLabels: {
              angle: 270,
              fontSize: 10,
              opacity: ({text}) => {return this.state.displayInfo[text] ? 1 : 0;},
              padding: 0,
              textAnchor: "end"
            }
          }}
        />
        <VictoryAxis
          label= "Avg Flavors Used"
          dependentAxis
          tickFormat={(x) => (`${x}`)}
          style= {{
            axisLabel : {
              padding : 35
            }
          }}
        />
        <VictoryAxis
          dependentAxis
          domain={[0, 1]}
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
          data={this.getDataWithDisplayInfo(this.state.displayInfo)}
          x="baker"
          y="flavors"
          z="rank"
          alignment="start"
          style={{
            data: { fill: "darkred" },
            labels: { fontSize: ({ text }) => text.length > 5 ? 8 : 12 },
            parent: { border: "1px solid #ccc" }
          }}
          labels={({ datum }) => `flavors: ${datum.nflavors}, rank: ${datum.rank}`}
          labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
          sortKey= "rank"
          sortOrder="descending"
          animate={{
            onEnter: { duration: 1000 },
            onExit: { duration: 1000 }
          }}
        />
        {this.state.showRegression && (
          <VictoryLine
            data={[
              {x: 'Stu', y: 2.75},
              {x: 'Nadiya', y: 3.25}
            ]}
            domain={{
              y: [0, 4]
            }}
            scale={{x: "baker", y: "flavors"}}
            standalone={false}
            animate={{
              onEnter: { duration: 1000 },
              onExit: { duration: 1000 }
            }}
          />
        )}
      </VictoryChart>
    )
  }
}