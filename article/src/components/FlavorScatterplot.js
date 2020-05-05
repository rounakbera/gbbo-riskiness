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

  
  // containerComponent={<VictoryVoronoiContainer/>}
  render() {
    return (
      <VictoryChart
        containerComponent={<VictoryZoomVoronoiContainer 
                                allowZoom={this.state.zoom} 
                                />}
                                
        domain={this.state.domain}
        theme={VictoryTheme.material}
      >
       <VictoryLabel text= {"Flavor Riskiness vs Number of Times Used"} x={175} y={30} textAnchor="middle"/>
        <VictoryAxis
          label="Flavor Riskiness"
          tickFormat={(x) => (`${x}`)}
          style={{
            axisLabel: {
              fontSize: 10,
              padding: 30
            }
          }}
        />
        <VictoryAxis
          label= "Number of Times Used"
          dependentAxis
          //domain={[0, 1]}
          tickFormat={(x) => (`${x}`)}
          style= {{
            axisLabel : {
              padding : 35
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
              fill: ({ datum }) => this.getColor(datum.controversy)
            },
            labels: {
              fontSize: 5
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
          symbol={({ datum }) => this.getShape(datum.performance)}
          x="riskiness"
          y="count"
        />
      </VictoryChart>
    )
  }
}