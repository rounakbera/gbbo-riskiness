import React from 'react';
import { 
  VictoryChart, 
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryZoomContainer,
  createContainer,
  VictoryLabel,
  VictoryAxis
} from 'victory';
//import Math from 'math';

//const data = require('../data/flavorRiskinessToPerformance.json');
const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

export default class FlavorScatterplot extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: props.scatterdata,
      domain: props.domain,
      //data: props.data || data,
      animate: props.animate,
      animating: false,
      zoom: this.props.zoom
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.animating && this.props !== prevProps ) {
      this.setState({
        //data: this.props.data,
        data: this.props.scatterdata,
        domain: this.props.domain,
        animating: true,
        zoom: this.props.zoom
      });
      setTimeout(() => this.setState({animating: false}), this.state.animate);
    }
  }

  getColor(performance, riskiness) {
    const darkRed = "#A3352C";
    const lightRed = "#FFBD98";
    const darkGreen = "#497028";
    const lightGreen = "#C3E17D";
    const darkYellow = "#927D31";
    const lightYellow = "#F4DD8B";
    const riskMap = {
      "GOOD": darkGreen,
      "NEUTRAL": darkYellow,
      "BAD": darkRed
    };
    const safeMap = {
      "GOOD": lightGreen,
      "NEUTRAL": lightYellow,
      "BAD": lightRed
    };
    
    return riskiness > 0.5 ? riskMap[performance] : safeMap[performance];
  }

  getShape(performance) {
    if (performance == "GOOD")
      return "plus";
    if (performance == "BAD")
      return "minus";
    return "circle";
  }

  // containerComponent={<VictoryVoronoiContainer/>}
  render() {
    return (
      <VictoryChart
        containerComponent={<VictoryZoomVoronoiContainer 
                                allowZoom={false} 
                                />}
                                
        domain={this.state.domain}
        theme={VictoryTheme.material}
      >
       <VictoryLabel 
        text= {"Flavor Riskiness vs Number of Times Used"} 
        x={175} 
        y={30} 
        textAnchor="middle"
      />
        <VictoryAxis
          label="Riskiness"
          tickFormat={(t) => `${Math.round(t*100)}%`}
          style={{
            axisLabel: {
              fontSize: 15,
              padding : 30
            },
            tickLabels: {
              fontSize: 8,
            }
          }}
        />
        <VictoryAxis
          label= "Number of Times Used"
          dependentAxis
          //domain={[0, 1]}
          tickFormat={(t) => (`${Math.round(t)}`)}
          style= {{
            axisLabel: {
              fontSize: 15,
              padding : 35
            },
            tickLabels: {
              fontSize: 8,
            }
          }}
        />
        <VictoryScatter
          data={this.state.data}
          labels={({ datum }) => datum.flavor}
          labelComponent={<VictoryTooltip pointerLength={0} />}
          size={3.3}
          style={{
            data: {
              fill: ({ datum }) => this.getColor(datum.performance, datum.riskiness)
            },
            labels: {
              fontSize: 8
            }
          }}
          animate={{
            onExit: {
              duration: 500,
             before: () => ({ opacity: 0.3, _y: 0 })
            },
            onEnter: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 }),
             after: (datum) => ({ opacity: 1, _y: datum._y })
            }
          }}
          symbol="circle"
          x="riskiness"
          y="count"
        />
      </VictoryChart>
    )
  }
}