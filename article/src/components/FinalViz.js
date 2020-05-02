import React from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryTooltip, 
  VictoryAxis 
} from 'victory';
const bakerInfo = require('../data/bakerinfo.json')
const allSeasons = require('../data/seasons.json')

export default class FinalViz extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: this.parseData(bakerInfo),
      animate: props.animate,
      animating: false
    }
  }
  calcLeaf(bakerList) {
    var finalData = [];
    var seenVals = {};
    for (var i in bakerList) {
      var datum = {};
      datum['place'] = bakerList[i][0];
      datum['risk'] = bakerList[i][1];
      datum['baker'] = bakerList[i][2];
      if(datum['risk'] in seenVals) {
        seenVals[datum['risk']]++;
      } else {
        seenVals[datum['risk']] = 0;
      }
      datum['leaf'] = seenVals[datum['risk']] + 1;
      finalData.push(datum);
    }
    return finalData;
  }
  parseData(info) {
    var bakerPlaceRisk = [];
    for (var i in info) {
      var risk = Math.round(info[i]['% Risk']*20)/20;
      bakerPlaceRisk.push([info[i]['Place'], risk, info[i]['Baker']]);
    }
    bakerPlaceRisk.sort(function(a,b) {
      return a[0]-b[0];
    });
    return this.calcLeaf(bakerPlaceRisk);
  }
  getLabel(baker, place) {
    return "Constestant: " + baker + "\n Rank: " + place;
  }
  getTooltipLength(string) {
    return string.split("\n")[0].length;
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
  render () {
    var ticks = Array.from({length: 20}, (x,i) => i/20);
    ticks.push(1);
    console.log(ticks);
    return (
      <VictoryChart containerComponent={<VictoryVoronoiContainer/>}>
        <VictoryScatter
          data={this.state.data}
          x="leaf"
          y="risk"
          labels={({ datum }) => this.getLabel(datum.baker, datum.place)}
          labelComponent={
          <VictoryTooltip
              cornerRadius={2}
              pointerOrientation = "right"
              centerOffset = {{x: -50, y: 20}}
              dy = {1}
              dx = {-1}
              pointerLength={({ datum }) => this.getTooltipLength(datum.baker)}
          />}
          events={[{
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "data",
                    mutation: () => ({style: {stroke: "gold", width: 30}})
                  }, {
                    target: "labels",
                    mutation: () => ({ active: true })
                  }
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    target: "data",
                    mutation: () => {}
                  }, {
                    target: "labels",
                    mutation: () => ({ active: false })
                  }
                ];
              }
            }
          }]}
          padding = {{ left: 100}}
          style={{
            data: { fill: "#c43a31", fillOpacity: ({ datum }) => 1/datum.place},
            labels: { fill: "black", fontSize: 5, textAlign: "middle"}
          }}
          size={2}
        />
        <VictoryAxis tickValues = {ticks} dependentAxis label = "Baker Average Risk Distribution"
          offsetX = {50}
          x={10} y={300} 
          style={{
            tickLabels: { fontSize: 5, textAnchor: "middle" }
          }}  />
        <VictoryAxis tickValues = {Array.from({length: 4}, (x,i) => i)}
          width = {200}
          style = {{
            axis: {strokeOpacity: 0},
            tickLabels: { fontSize: 0 }
          }}/>
        </VictoryChart>
    )
  }
}