import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import RiskBarchart from './RiskBarchart.js';
import TextSection from './TextSection.js';

const Main = styled.div`
  padding: 0 2vw 0 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
`
const Graphic = styled.div`
  flex-basis: 45%;
  position: sticky;
  width: 100%;
  padding: 10vh 5vw 0 5vw;
  top: 1rem;
  align-self: flex-start;
`
const Scroller = styled.div`
  flex-basis: 50%;
`
const Content = styled.div`
  margin: 0 auto 2rem auto;
  min-height: 50vh;
  padding: 5vh 0 10vh 5vw;
  &:last-child {
    margin-bottom: 0;
  }
`

const displayMap = {
  1: {
    "Alvin": true,
    "Dorret": true,
    "Flora": true,
    "Ian": true,
    "Mat": true,
    "Nadiya": true,
    "Paul": true,
    "Sandy": true,
    "Tamal": true,
    "Ugne": true,
    "Stu": true,
    "Marie": true
  },
  2: {
    "Alvin": true,
    "Dorret": true,
    "Flora": true,
    "Ian": true,
    "Mat": true,
    "Nadiya": true,
    "Paul": true,
    "Sandy": true,
    "Tamal": true,
    "Ugne": true,
    "Stu": true,
    "Marie": true
  },
  3: {
    "Alvin": false,
    "Dorret": false,
    "Flora": false,
    "Ian": false,
    "Mat": true,
    "Nadiya": true,
    "Paul": false,
    "Sandy": false,
    "Tamal": false,
    "Ugne": false,
    "Stu": true,
    "Marie": false
  }
};
const displayMapRank = {
  1: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true
  },
  1: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true
  },
  2: {
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: true,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: true
  }
};

const contentMap = {
  1: <TextSection 
    title={"Risk-taking in Series 6"} 
    description={
      <div>
        <p>
          Moving on to the rest of the season: here are the contestants of 
          series six ordered from left to right by how far they made it in the 
          competition. Nadiya is the right-most bar, as she won this series.
        </p>
        <p>
          On the Y-axis is the average riskiness score we calculated by 
          noting every time a judge points out the unusualness of a flavor. 
          Plotted here is the proportion of bakes considered risky over the 
          course of the entire series for each individual baker. 
        </p>
      </div>
    } 
  />,
  2: <TextSection 
    description={
      <div>
        <p>
          Here we added a trend line using quadratic regression. 
        </p>
        <p>
          As you can see, average riskiness seems to be higher on each end: both in those 
          who left earlier in the competition and those who made it til the end. 
        </p>
      </div>
    } 
  />,
  3: <TextSection 
    description={
      <div>
        <p>
          Let’s dive deeper into three contestants and look how they performed.
        </p>
        <p>
          We will look at <b>Stu</b> who was eliminated first, <b>Mat</b> who made it a 
          little past halfway, and <b>Nadiya</b> who won the competition.
        </p>
      </div>
    } 
  />
}

export default class RiskBarchartScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: Object.keys(contentMap),
      progress: 0,
    };
  };

  onStepEnter = ({ element, data }) => {
    this.setState({ data });
  };

  onStepExit = ({ element }) => {
  };

  onStepProgress = ({ element, progress }) => {
    // Commented out because it stalls animation
    // this.setState({ progress });
  }

  getDisplayInfo = (data) => {
    return displayMap[data] || displayMap[1];
  }

  getContent = (value) => {
    return contentMap[value] || contentMap[1];
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
          >
            {steps.map(value => (
              <Step data={value} key={value}>
                <Content>
                  {this.getContent(value)}
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>
        <Graphic>
          <RiskBarchart displayInfo={this.getDisplayInfo(data)} showRegression={data > 1}/>
        </Graphic>
      </Main>
    );
  }
}