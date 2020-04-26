import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import BarchartExample from './BarchartExample.js';

const Main = styled.div`
  padding: 70vh 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
`
const Graphic = styled.div`
  flex-basis: 60%;
  position: sticky;
  width: 100%;
  padding: 2rem 0;
  top: 1rem;
  align-self: flex-start;
  background-color: #aaa;
  & p {
    font-size: 2rem;
    text-align: center;
    color: #fff;
  }
`
const Scroller = styled.div`
  flex-basis: 35%;
`
const Content = styled.div`
  margin: 0 auto 2rem auto;
  padding-top: 200px;
  padding-bottom: 200px;
  border: 1px solid #333;
  & p {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const chartMap = {
  1: [{"baker": "Alvin", "risk": 0.4166666666666667, "rank": 7}, 
  {"baker": "Dorret", "risk": 0.3333333333333333, "rank":10}, 
  {"baker": "Flora", "risk": 0.3888888888888889,"rank":4}, 
  {"baker": "Ian", "risk": 0.55, "rank":2}, 
  {"baker": "Mat", "risk": 0.2857142857142857, "rank":6}, 
  {"baker": "Nadiya", "risk": 0.65, "rank":1}, 
  {"baker": "Paul", "risk": 0.375, "rank":5}, 
  {"baker": "Sandy", "risk": 0.625, "rank":9}, 
  {"baker": "Tamal", "risk": 0.4, "rank":3}, {"baker": "Ugne", "risk": 1.0, "rank":8}, {"baker": "Stu", "risk": 1.0, "rank":12}, {"baker": "Marie", "risk": 0.0, "rank":11}],
  2: [ {"baker": "Stu", "risk": 1.0, "rank": 12}, 
  {"baker": "Mat", "risk": 0.2857142857142857, "rank": 6}, 
  {"baker": "Nadiya", "risk": 0.65, "rank":1}],
  3: [
    {quarter: 1, earnings: 20000},
    {quarter: 2, earnings: 10000},
    {quarter: 3, earnings: 10000},
    {quarter: 4, earnings: 6000}
  ]
};

export default class ScrollamaExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: [1, 2, 3],
      progress: 0,
    };
  };

  onStepEnter = ({ element, data }) => {
    element.style.backgroundColor = 'lightgoldenrodyellow';
    this.setState({ data });
  };

  onStepExit = ({ element }) => {
    element.style.backgroundColor = '#fff';
  };

  onStepProgress = ({ element, progress }) => {
    // Commented out because it stalls animation
    // this.setState({ progress });
  }

  getCurrentChart = (data) => {
    // return chartMap[data] || 
    console.log("data",chartMap[data])
    return chartMap[data];
  }

  render() {
    const { data, steps, progress } = this.state;

    return (
      <Main>
        <Scroller>
          <Scrollama
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
            progress
            onStepProgress={this.onStepProgress}
            offset={0.33}
            debug
          >
            {steps.map(value => (
              <Step data={value} key={value}>
                <Content>
                  <p>step: {value}</p>
                  <p>{value === data ? progress : "-"}</p>
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>
        <Graphic>
          <p>{data}</p>
          <BarchartExample data={this.getCurrentChart(data)} />
        </Graphic>
      </Main>
    );
  }
}