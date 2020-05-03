import React from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryVoronoi,
  VictoryTooltip, 
  VictoryAxis 
} from 'victory';
import WorkingHandle from './WorkingHandle';


const bakerInfo = require('../data/bakerinfo.json')
const allSeasons = require('../data/seasons.json')

export default class FinalViz extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: this.parseData(bakerInfo),
      animate: props.animate,
      animating: false,
      placeLimit: 3
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
      datum['season'] = bakerList[i][3];
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
      bakerPlaceRisk.push([info[i]['Place'], risk, info[i]['Baker'], info[i]['Season']]);
    }
    bakerPlaceRisk.sort(function(a,b) {
      return a[0]-b[0];
    });
    return this.calcLeaf(bakerPlaceRisk);
  }
  getLabel(baker, place, season) {
    return "Constestant: " + baker + "\nSeason: " + season + "\nPlacing: " + place;
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
  getBorderColor(place) {
    return place > this.state.placeLimit ? "black" : "tomato";
  }
  render () {
    var ticks = Array.from({length: 20}, (x,i) => i/20);
    ticks.push(1);
    console.log(ticks);
    return (
      <div>
      <WorkingHandle value = {this.state.placeLimit}/>
      <VictoryChart 
        domain = {{y:[-0.025, 1.025]}}
        width = {165}
        height = {160}
        style={{ parent: { maxWidth: "75%" } }}
        padding={{ top: 0, bottom: 50, right: 10, left: 30 }}
        containerComponent={<VictoryVoronoiContainer/>}>
        <VictoryVoronoi
          padding={{ top: 0, bottom: 50, right: 0, left: 30 }}
          standalone = {false}
          style={{ data: { stroke: "#c43a31", strokeWidth: 0 } }}
          data={this.state.data}
          x="leaf"
          y="risk"
        />
        <VictoryScatter
          data={this.state.data}
          x="leaf"
          y="risk"
          labels={({ datum }) => this.getLabel(datum.baker, datum.place, datum.season)}
          labelComponent={
          <VictoryTooltip
              cornerRadius={2}
              pointerOrientation = "left"
              centerOffset = {{x: 30, y: 15}}
              dy = {16}
              dx = {0}
              pointerLength={({ datum }) => this.getTooltipLength(datum.baker)}
              pointerWidth = {5}
          />}
          style={{
            data: { 
              fill: "black",
              stroke: ({datum}) => this.getBorderColor(datum.place), 
              strokeWidth: 1, fillOpacity: ({ datum }) => 1/datum.place
            },
            labels: { fill: "black", fontSize: 4, textAlign: "middle", padding: 2}
          }}
          size={2}
        />
        <VictoryAxis dependentAxis
          tickValues = {ticks}
          label = "Baker Average Risk Distribution"
          tickFormat = {(t) => t.toFixed(2)}
          offsetX = {30}
          x={10} y={300} 
          padding = {30}
          style={{
            axis: {strokeWidth: 5},
            axisLabel: {fontSize: 5, padding: 20},
            tickLabels: { fontSize: 4, textAnchor: "middle" }
          }}  />
        <VictoryAxis tickValues = {Array.from({length: 4}, (x,i) => i)}
          width = {100}
          style = {{
            axis: {strokeOpacity: 0},
            tickLabels: { fontSize: 0 }
          }}/>
        </VictoryChart>
        </div>
    )
  }
}