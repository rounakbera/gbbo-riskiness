import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import FlavorBarchart from './FlavorBarchart.js';
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
  }
};

const contentMap = {
  1: <TextSection title={"Average Flavors Used per Bake"} description={<p>Again, let’s look at Stu, Mat, and Nadiya’s average number of flavors used. In his two dishes before being eliminated, Stu used three and five flavors respectively, averaging to four. Mat chose slightly more than three on average, and Nadiya was right in between at about 3.5 flavors per bake.    </p>} />,
  2: <TextSection description={[<br/>,<br/>,<p>Like the previous risk-taking graph, let’s order our three contestants among their peers in series 6 by placing. There seems to be little relation among the data, but if we add a linear regression...</p>]} />,
  3: <TextSection description={[<br/>,<br/>,<p>...we can immediately see that the average number of flavors used has a positive trend with place in the competition.</p>]} />
}

export default class FlavorBarchartScrollama extends React.Component {
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
          <FlavorBarchart displayInfo={this.getDisplayInfo(data)} showRegression={data > 2} />
        </Graphic>
      </Main>
    );
  }
}