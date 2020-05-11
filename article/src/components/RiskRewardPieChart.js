import React from 'react';
import { 
  VictoryPie
} from 'victory';

const data = require('../data/bakerRiskReward.json');

export default class RiskRewardPieChart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      animate: props.animate,
      animating: false,
      baker: props.baker,
      diameter: props.diameter || 200,
      standalone: props.standalone
    }
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

  getColor(label) {
    const colorMap = {
      "Risky & Good": "#24693D", // dark green
      "Risky & Okay": "#A08400", // dark yellow
      "Risky & Bad": "#B60A1C", // dark red
      "Not Risky & Good": "#B3E0A6", // light green
      "Not Risky & Okay": "#F7C480", // light yellow
      "Not Risky & Bad": "#FB9984" // light red
    };
    return colorMap[label];
  }

  getData(baker) {
    let bakerData = data.filter(entry => entry.baker == baker);
    return bakerData.map(entry => {
      return {
        x: this.getLabel(entry.risky, entry.grade),
        y: entry.count
      }
    });
  }

  getLabel(risk, grade) {
    let riskLabel = risk == "TRUE" ? "Risky" : "Not Risky";
    if (grade == "+")
      return riskLabel + " & " + "Good";
    if (grade == "-")
      return riskLabel + " & " + "Bad";
    return riskLabel + " & " + "Okay";
  }

  render() {
    const {baker, diameter, standalone} = this.state;
    return standalone ? (
      <VictoryPie
        standalone={standalone}
        height={diameter}
        width={10}
        padding={0}
        data={this.getData(baker)}
        style={{
          labels: { fontSize: 0 },
          data: {
            fill: ({ datum }) => this.getColor(datum.x),
          }
        }}
      />
    ) : (
      <VictoryPie
        standalone={standalone}
        height={diameter}
        width={diameter}
        data={this.getData(baker)}
        style={{
          labels: { fontSize: 0 },
          data: {
            fill: ({ datum }) => this.getColor(datum.x),
          }
        }}
      />
    )
  }
}