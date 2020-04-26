import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip
} from 'victory';

const sampleData = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

export default class BarchartExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data|| sampleData,
      animate: props.animate,
      animating: false
    }

    console.log(!!props.data)
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
  // componentDidMount() {
  //   this.setStateInterval = window.setInterval(() => {
  //     this.setState({
  //       data: this.getData()
  //     });
  //   }, 3000);
  // }
  
  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }


  getData() {
    return [ {"baker": "Stu", "risk": 1.0, "rank": 12}, {"baker": "Mat", "risk": 0.2857142857142857, "rank": 6}, {"baker": "Nadiya", "risk": 0.65, "rank":1}];
  
  }



  render() {
    return (
      <VictoryChart
        animate={{ duration: this.state.animate }}
        theme={VictoryTheme.material}
        domainPadding={1}
      >
        <VictoryAxis
         // tickValues={[1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ,11, 12]}
         // tickFormat={ ['Alvin', 'Dorret', 'Flora', 'Ian', 'Mat', 'Nadiya', 'Paul', 'Sandy', 'Tamal', 'Ugné', 'Stu', 'Marie']}
       
        />
        <VictoryAxis
          dependentAxis
          domain={[0, 1
          ]}
          tickFormat={(x) => (`${x}`)}
         
        />
        <VictoryBar
          //categories= {{ x:['Stu','Marie',  'Dorret', 'Sandy', 'Ugne','Alvin',  'Mat',  'Paul',  'Flora','Tamal','Ian', 'Nadiya'] }}
          data={this.state.data}
          x="baker"
          y="risk"
          z="rank"
          style={{
            data: { fill:  "purple" },
            labels: { fontSize: ({ text }) => text.length > 5 ? 8 : 12 },
            parent: { border: "1px solid #ccc" }
          }}
          labels={({datum}) => `risk: ${datum.risk}, rank: ${datum.rank}`}
          labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
          sortKey= "rank"
          sortOrder="descending"
          animate={{
            onExit: {
              duration: 1000,
              before: () => ({
                _y: 0
              })
            }
          }}
        />
      </VictoryChart>
    )
  }
}