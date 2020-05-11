import React from 'react';
import styled from "styled-components";
import { 
  VictoryLegend
} from 'victory';
import RiskRewardPieChart from './RiskRewardPieChart';

const Legend = styled.div`
  border: solid black 1px;
`

const PlaceLegend = styled.div`
  display: flex;
  flex-direction: row;
  margin: -3% 0 2% 0;
`

const Place = styled.div`
  position: absolute;
  transform: translate(2290%,55%);
  font-family: Muli,sans-serif;
  color: white;
  font-size: 24px;
  font-weight: bolder;
`

const Caption = styled.div`
  margin-left: -36%;
  padding-right: 30%;
  width: 25%;
  margin-top: 1.5%;
  & p {
    font-family: "Gill Sans", "Gill Sans MT", Seravek, "Trebuchet MS", sans-serif;
    font-size: 17px;
    margin: 0;
  }
`

const colorMap = {
    "Risky & Good": "#497028", // dark green
    "Risky & Okay": "#927D31", // dark yellow
    "Risky & Bad": "#A3352C", // dark red
    "Not Risky & Good": "#C3E17D", // light green
    "Not Risky & Okay": "#F4DD8B", // light yellow
    "Not Risky & Bad": "#FFBD98" // light red
  };

export default class PieChartLegend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baker: props.baker,
      animate: props.animate,
      animating: false
    }
  }
  createLegend() {
      var legendList = []
      Object.keys(colorMap).forEach(function(key) {
      var legendDict = {};
      legendDict["name"] = key;
      legendDict["symbol"] = {};
      legendDict["symbol"]["fill"] = colorMap[key];
      legendDict["labels"] = {};
      legendDict["labels"]["fontSize"] = 20;
      legendList.push(legendDict);
      });
      return legendList;
  }
  render() {
    return(
      <Legend>
        <VictoryLegend
          x={150} 
          y={10}
          width={1000}
          height={180}
          title="Overall Riskiness & Performance of Each Baker"
          centerTitle
          orientation="horizontal"
          gutter={50}
          style={{ 
            border: { stroke: "none" }, 
            title: { fontSize: 30 }
          }}
          itemsPerRow = {3}
          data={this.createLegend()}
        />
        <PlaceLegend>
          <RiskRewardPieChart baker={"Kimberley"} diameter={1} standalone={true}/>
          <Place>#</Place>
          <Caption><p>Baker's Final Placing</p><p>(e.g. 1 = first)</p></Caption>
        </PlaceLegend>
      </Legend>
    )
  }
}