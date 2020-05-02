import React from 'react';
import { 
  VictoryPie,
  VictoryTooltip
} from 'victory';

const data = require('../data/bakerRiskReward.json');

export default class BarchartExample extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      baker: props.baker,
      animate: props.animate,
      animating: false
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
    let output = bakerData.map(entry => {
      return {
        x: this.getLabel(entry.risky, entry.grade),
        y: entry.count
      }
    });
    console.log(output);
    return output;
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
    return (
      <VictoryPie
        data={this.getData(this.state.baker)}
        style={{
          data: {
            fill: ({ datum }) => this.getColor(datum.x)
          },
          labels: {
            fontSize: 10
          }
        }}
      />
    )
  }
}