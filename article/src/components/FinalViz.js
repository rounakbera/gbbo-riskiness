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
import PieChartLegend from './PieChartLegend';
import PieChartPointWrapper from './PieChartPointWrapper';
import { CustomVictoryTheme, GlobalStyles } from "./GlobalStyles.js";


const bakerInfo = require('../data/bakerinfo.json')
const separation = 0.05; 

const Container = styled.div`
width: 40%;
margin: -80px 0 0 20%;
// padding: 0px 700px;
// float: left;
// position: absolute;
text-align: center;
z-index: 99;
`;
const legendContainer = styled.div`
margin-right: 80%;
position: absolute
`
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
    return "Baker: " + baker + "\nSeries: " + season + "\nPlacing: " + place;
  }
  getTooltipLength(string) {
    return string.split("\n")[0].length;
  }
  getBorderOpacity(place) {
    return place > this.state.placeLimit ? 0.1 : 1;
  }
  changePlaceLimit = (placeLimit) =>{
    this.setState({placeLimit});
  }
  render () {
    var ticks = Array.from({length: 1/separation}, (x,i) => i*separation);
    ticks.push(1);
    return (
      <div>
        <div style={{float: "right",marginBottom:"-40vh",marginRight:"-10vw"}}>
        <PieChartLegend />
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
        </div>
        <VictoryChart 
          theme={ CustomVictoryTheme }
          domain = {{x:[-0.025, 1.025]}}
          height = {235}
          padding={{ right: 0, left: 0, top: 30, bottom: 40 }}
          style={{ parent: { maxHeight: "65%" } }}
          containerComponent={<VictoryVoronoiContainer radius={25}/>}
          >
          <VictoryVoronoi
            padding={{ right: 0, left: 0, top: 0, bottom: 0 }}
            standalone = {false}
            style={{ data: { fill: "transparent" } }}
            data={this.state.data}
            x="risk"
            y="leaf"
          />
          <VictoryScatter
            style = {{ line: "transparent" }}
            data={this.state.data}
            dataComponent={ <PieChartPointWrapper /> }
            x="risk"
            y="leaf"
            labels={({ datum }) => this.getLabel(datum.baker, datum.place, datum.season)}
            labelComponent={
            <VictoryTooltip
                cornerRadius={2}
                pointerLength={0}
                style={{ 
                  fontSize: 6, 
                  textAnchor: "right", 
                }}
                dy={50}
                dx={0}
            />}
            style={{
              data: { 
                strokeOpacity: ({datum}) => this.getBorderOpacity(datum.place), 
                strokeWidth: 0
              },
              labels: { 
                fill: "black", 
                padding: 1
              }
            }}
            size={4}
          />
          <VictoryAxis
            label = "Baker Average Risk Distribution"
            offsetY={28}
            tickValues = {ticks}
            tickFormat = {(t) => `${Math.round(t*100)}%`}
            style={{
              axis: {
                strokeWidth: 2
              },
              axisLabel: {
                fontSize: 8, 
                padding: 12
              },
              grid: {
                strokeOpacity: 0
              },
              tickLabels: { 
                fontSize: 5,
                padding: 2,
                textAnchor: "middle" 
              }
            }}  
          />
        </VictoryChart>
      </div>

    )
  }
}