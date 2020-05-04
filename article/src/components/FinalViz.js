import React from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryVoronoi,
  VictoryVoronoiContainer,
  VictoryTooltip, 
  VictoryAxis 
} from 'victory';
import PieChartPointWrapper from './PieChartPointWrapper';
import WorkingHandle from './WorkingHandle';


const bakerInfo = require('../data/bakerinfo.json')
const allSeasons = require('../data/seasons.json')
const separation = 0.05; 

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
      var risk = Math.round(info[i]['% Risk']/separation)*separation;
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
    var ticks = Array.from({length: 1/separation}, (x,i) => i*separation);
    ticks.push(1);
    
    return (
      <div>
        <WorkingHandle />
        <VictoryChart 
          domain = {{y:[-0.025, 1.025]}}
          width = {90}
          height = {200}
          padding={{ top: 0, bottom: 50, right: 5, left: 20 }}
          containerComponent={<VictoryVoronoiContainer/>}>
          <VictoryVoronoi
            padding={{ top: 0, bottom: 50, right: 0, left: 20 }}
            standalone = {false}
            style={{ data: { stroke: "#c43a31", strokeWidth: 0 } }}
            data={this.state.data}
            x="leaf"
            y="risk"
          />
          <VictoryScatter
            data={this.state.data}
            dataComponent={ <PieChartPointWrapper /> }
            x="leaf"
            y="risk"
            labels={({ datum }) => this.getLabel(datum.baker, datum.place, datum.season)}
            labelComponent={
              <VictoryTooltip
                cornerRadius={2}
                centerOffset={{x: 20, y: 10}}
                dy={16}
                dx={0}
                pointerLength={0}
              />
            }
            style={{
              data: { 
                fill: "black",
                stroke: ({datum}) => this.getBorderColor(datum.place), 
                strokeWidth: 1, 
                fillOpacity: ({ datum }) => 1/datum.place
              },
              labels: {
                fill: "black", 
                fontSize: 2, 
                textAlign: "middle", 
                padding: 1
              }
            }}
            size={2}
          />
          <VictoryAxis dependentAxis
            label = "Baker's Overall Average Risk"
            offsetX={15}
            tickValues = {ticks}
            tickFormat = {(t) => `${Math.round(t*100)}%`}
            style={{
              axis: {strokeWidth: 2},
              axisLabel: {
                fontSize: 3, 
                padding: 10
              },
              tickLabels: { 
                fontSize: 2,
                padding: 5,
                textAnchor: "start" 
              }
            }}  
          />
        </VictoryChart>
      </div>
    )
  }
}