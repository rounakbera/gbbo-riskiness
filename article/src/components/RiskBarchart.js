import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryLine
} from 'victory';

const data = require('../data/bakerRiskiness.json');

export default class RiskBarchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: props.displayInfo,
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
        "risk": displayInfo[datum.baker] ? datum.risk : 0
      };
    });
  }

  render() {
    return (
      <VictoryChart
        text= {"Series "+ this.state.series}
        animate={{ duration: this.state.animate }}
        theme={VictoryTheme.material}
        domainPadding={1}
      >
        <VictoryAxis
          label="Baker"
          tickFormat={(x) => (`${x}`)}
          style={{
            axisLabel: {
              fontSize: 15,
              padding: 35
            },
            tickLabels: {
              angle: 270,
              fontSize: 8,
              opacity: ({text}) => {return this.state.displayInfo[text] ? 1 : 0;},
              padding: 0,
              textAnchor: "end"
            }
          }}
        />
        <VictoryAxis
          label= "Riskiness"
          dependentAxis
          domain={[0, 1]}
          tickFormat={(t) => `${Math.round(t*100)}%`}
          style= {{
            axisLabel: {
              fontSize: 15,
              padding : 35
            },
            tickLabels: {
              fontSize: 8
            }
          }}
        />
        <VictoryBar
          data={this.getDataWithDisplayInfo(this.state.displayInfo)}
          x="baker"
          y="risk"
          z="rank"
          alignment="start"
          style={{
            data: { fill: "purple" },
            labels: { fontSize: ({ text }) => text.length > 5 ? 8 : 12 },
            parent: { border: "1px solid #ccc" }
          }}
          labels={({ datum }) => `risk: ${datum.risk}, rank: ${datum.rank}`}
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
            y= {(data) => 1.110743827-0.2151723771*data.x+ 0.0148058048 *Math.pow(data.x,2)}
            scale={{x: "baker", y: "risk"}}
            standalone={false}
            domain= {{y :[0,1]}}
            interpolation="natural"
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