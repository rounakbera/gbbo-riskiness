import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryLine
} from 'victory';

var data = require('../data/bakerAvgFlavors.json');

export default class BarchartExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //displayInfo: props.displayInfo,
      animate: props.animate,
      animating: false,
      series: props.series
    }
    if (this.state.series== 5){
      data = require('../data/s5bakersAvgFlavors.json');
    } else if(this.state.series== 4){
      data = require('../data/s4bakersAvgFlavors.json');
    }else {
      data = require('../data/bakerAvgFlavors.json');
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
        "flavors": displayInfo[datum.baker] ? datum.nflavors : 0
      };
    });
  }
  getRegressionPoints(x){
    if(this.state.series==6){
      return 0.093686869*x+ 2.53048341
    } else if(this.state.series==5){
      return 0.0862570656*x+2.799851306
    }else{
      return 0.236688906*x+1.707997558
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
          style={{
            axisLabel: {
              fontSize: 15,
              padding: 37
            },
            tickLabels: {
              angle: 270,
              fontSize: 8,
              //opacity: ({text}) => {return this.state.displayInfo[text] ? 1 : 0;},
              padding: 0,
              textAnchor: "end"
            }
          }}
        />
        <VictoryAxis
          label= "Avg Flavors Used"
          dependentAxis
          domain={[0, 1]}
          tickFormat={(x) => (`${x}`)}
          style= {{
            axisLabel : {
              fontSize: 15,
              padding : 35
            },
            tickLabels: {
              fontSize: 8
            }
          }}
        />
        <VictoryBar
          data={data}
          x="baker"
          y="nflavors"
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
          <VictoryLine
            y= {(data) => this.getRegressionPoints(data.x)}
            domain={{
              y: [0, 4]
            }}
            scale={{x: "baker", y: "flavors"}}
            standalone={false}
            // style={styles.lineThree}
          />
      </VictoryChart>
    )
  }
}