import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryLine
} from 'victory';

var data= require('../data/s5bakerRiskiness.json');


export default class BarchartExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //displayInfo: props.displayInfo,
      series : props.series,
      animate: props.animate,
      animating: false,
    }
    if (this.state.series== 5){
      data = require('../data/s5bakerRiskiness.json');
    } else if(this.state.series== 4){
      data = require('../data/s4bakerRiskiness.json');
    }else {
      data = require('../data/bakerRiskiness.json');
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.animating && this.props.displayInfo !== prevProps.displayInfo) {
      this.setState({
        displayInfo: this.props.displayInfo,
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
  getRegressionPoints(x){
    if(this.state.series==6){
      return 1.110743827-0.2151723771*x+ 0.0148058048 *Math.pow(x,2)
    } else if(this.state.series==5){
      return 1.416890726-0.3059164602*x+ 0.0203858653 *Math.pow(x,2)
    }else{
      return 0.696847257-0.1499537858*x+0.01130886736 *Math.pow(x,2)
    }
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
          tickFormat={(x) => (`${x}`)}
          style={{
            axisLabel: {
              fontSize: 15,
              padding: 37
            },
            tickLabels: {
              angle: 270,
              fontSize: 10,
             // opacity: ({text}) => {return this.state.displayInfo[text] ? 1 : 0;},
              padding: 0,
              textAnchor: "end"
            }
          }}
        />
        <VictoryAxis
          label= "Riskiness"
          dependentAxis
          domain={[0, 1]}
          tickFormat={(x) => (`${x}`)}
          style= {{
            axisLabel : {
              padding : 35
            }
          }}
        />
        <VictoryBar
          data={data}
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
        <VictoryLine
            // data={[{x:'Stu', y: 1.07},{x:'Mat', y: .28},
            // {x:'Nadiya', y: .65}]}
            y= {(data) => this.getRegressionPoints(data.x)}
            scale={{x: "baker", y: "risk"}}
            standalone={false}
            domain= {{y :[0,1]}}
            interpolation="natural"
            animate={{
              onEnter: { duration: 1000 },
              onExit: { duration: 1000 }
            }}
          />
      </VictoryChart>
    )
  }
}