import React from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryVoronoi,
  VictoryTooltip, 
  VictoryAxis 
} from 'victory';
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { HandleFormat } from "./HandleFormat";
import { CurrentVictoryTheme, GlobalStyles } from "./GlobalStyles.js";


const bakerInfo = require('../data/bakerinfo.json')
const Container = styled.div`
width: 300px;
margin: 0px 48px;
float: right;
text-align: center;
`;
const ContainerLabel = styled.p`
padding: 30px;
font-size: 20;
font-weight: bold;
color: #ff6347;
`;


export default class FinalViz extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: this.parseData(bakerInfo),
      animate: props.animate,
      animating: false,
      placeLimit: 1
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
  getBorderOpacity(place) {
    return place > this.state.placeLimit ? 0 : 100;
  }
  changePlaceLimit = (placeLimit) =>{
    this.setState({placeLimit});
  }
  render () {
    var ticks = Array.from({length: 20}, (x,i) => i/20);
    ticks.push(1);
    return (
      <div>
        <Container>
          <ContainerLabel>
            <p>Contestant Placing Range</p>
          </ContainerLabel>
          <Slider
            min={1}
            max={13}
            value={this.state.placeLimit}
            step={1}
            marks={{ 1: "1", 13: "13" }}
            onChange={this.changePlaceLimit}
            handle={HandleFormat}
          />
        </Container>
        <VictoryChart 
          theme={ CurrentVictoryTheme }
          domain = {{y:[-0.025, 1.025]}}
          width = {165}
          height = {160}
          style={{ parent: { maxWidth: "65%" } }}
          padding={{ top: 20, bottom: 20, right: 10, left: 30 }}
          containerComponent={<VictoryVoronoiContainer/>}>
          <VictoryVoronoi
            padding={{ top: 0, bottom: 50, right: 0, left: 30 }}
            standalone = {false}
            style={{ data: { fill: "transparent" } }}
            data={this.state.data}
            x="leaf"
            y="risk"
          />
          <VictoryScatter
            style = {{ line: "transparent" }}
            data={this.state.data}
            x="leaf"
            y="risk"
            labels={({ datum }) => this.getLabel(datum.baker, datum.place, datum.season)}
            labelComponent={
            <VictoryTooltip
                cornerRadius={2}
                pointerOrientation = "left"
                centerOffset = {{x: 30, y: 15}}
                dy = {0}
                dx = {0}
                pointerLength={({ datum }) => this.getTooltipLength(datum.baker)}
                pointerWidth = {5}
            />}
            style={{
              data: { 
                fill: "black",
                stroke: "tomato",
                strokeOpacity: ({datum}) => this.getBorderOpacity(datum.place), 
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
              grid: { strokeOpacity: 0 },
              axis: {strokeWidth: 5},
              axisLabel: {fontSize: 5, padding: 20},
              tickLabels: { fontSize: 4, textAnchor: "middle", padding: 10 }
            }}  />
          <VictoryAxis
            tickValues = {Array.from({length: 4}, (x,i) => i)}
            style = {{
              grid: { strokeOpacity: 0 },
              axis: {strokeOpacity: 0},
              tickLabels: { fontSize: 0 }
            }}  />
        </VictoryChart>
      </div>

    )
  }
}