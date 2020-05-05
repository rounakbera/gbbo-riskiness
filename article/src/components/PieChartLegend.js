import React from 'react';
import { 
  VictoryLegend,
  VictoryContainer
} from 'victory';

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
          <svg width={800} height={210}>
          <VictoryLegend
            x={20} y={60}
            title="Legend"
            standalone = { false }
            centerTitle
            orientation="horizontal"
            gutter={20}
            style={{ border: { stroke: "black" }, title: {fontSize: 30 } }}
            itemsPerRow = {3}
            data={this.createLegend()}
          />
          </svg>
    )
  }
}