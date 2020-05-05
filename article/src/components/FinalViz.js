import React from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryVoronoi,
  VictoryVoronoiContainer,
  VictoryTooltip, 
  VictoryAxis 
} from 'victory';
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { HandleFormat } from "./HandleFormat";
import PieChartPointWrapper from './PieChartPointWrapper';
import { CustomVictoryTheme, GlobalStyles } from "./GlobalStyles.js";


const bakerInfo = require('../data/bakerinfo.json')
const separation = 0.05; 

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
  getBorderOpacity(place) {
    return place > this.state.placeLimit ? 0 : 100;
  }
  changePlaceLimit = (placeLimit) =>{
    this.setState({placeLimit});
  }
  render () {
    var ticks = Array.from({length: 1/separation}, (x,i) => i*separation);
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
          theme={ CustomVictoryTheme }
          domain = {{y:[-0.025, 1.025]}}
          width = {90}
          height = {200}
          padding={{ top: 0, bottom: 50, right: 5, left: 20 }}
          style={{ parent: { maxWidth: "65%" } }}
          containerComponent={<VictoryVoronoiContainer/>}>
          <VictoryVoronoi
            padding={{ top: 0, bottom: 50, right: 0, left: 20 }}
            standalone = {false}
            style={{ data: { fill: "transparent" } }}
            data={this.state.data}
            x="leaf"
            y="risk"
          />
          <VictoryScatter
            style = {{ line: "transparent" }}
            data={this.state.data}
            dataComponent={ <PieChartPointWrapper /> }
            x="leaf"
            y="risk"
            labels={({ datum }) => this.getLabel(datum.baker, datum.place, datum.season)}
            labelComponent={
            <VictoryTooltip
                cornerRadius={2}
                centerOffset={{x: 20, y: 10}}
                dy = {16}
                dx = {0}
            />}
            style={{
              data: { 
                fill: "black",
                stroke: "tomato",
                strokeOpacity: ({datum}) => this.getBorderOpacity(datum.place), 
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
            label = "Baker Average Risk Distribution"
            offsetX={15}
            tickValues = {ticks}
            tickFormat = {(t) => `${Math.round(t*100)}%`}
            style={{
              axis: {
                strokeWidth: 2
              },
              axisLabel: {
                fontSize: 3, 
                padding: 10
              },
              grid: {
                strokeOpacity: 0
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