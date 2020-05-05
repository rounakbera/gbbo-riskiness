import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import RiskBarchart from './RiskBarchart.js';
import TextSection from './TextSection.js';
import FlavorScatterplot from './FlavorScatterplot.js'
import Carrotcake from '../assets/voulaucarrotcake.png';
import Volvauvent from '../assets/voulauventwocake.png';

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
const ImageWrapper = styled.div`
  height: ${props => `${props.minHeight + 150}px`};
  width: ${props => `${props.minWidth}px`};
`
const Image = styled.img`
  position: absolute;
  opacity: ${props => props.display ? `1` : `0`};
  transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  width: 40vw;
  margin-left: 5vw;
  top: 25%;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1% 33% 33% 33%;
`
const imageMap = {
  2: Volvauvent,
  3: Carrotcake,
  6:Carrotcake
};
var datascatter = require('../data/flavorRiskinessToPerformance.json');
const datamap={
  4: [{
    "riskiness": 0.321428571,
    "flavor": "cinnamon",
    "performance": "GOOD",
    "bad": 0.25,
    "good": 0.392857143,
    "neutral": 0.357142857,
    "controversy": 0.142857143,
    "count": 28
  }],
  5: datascatter
}
const domainMap = {
  4: {x: [.3, .34], y: [26, 29]},
  5: {x: [0,1], y: [0, 65]}
};
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

const contentMap = {
  1: <TextSection 
    title={"Let’s look at back at two of the bakes:"}
  />,
  2: <TextSection 
    description={
      <div>
        <p>
          Nadiya's Vol-au-Vents
        </p>
      </div>
    } 
  />,
  3: <TextSection 
    description={
      <div>
        <p>
          Nadiya's Vol-au-Vents
        </p>
        <p>
          and Mat's Sugar Free Carrot Cake
        </p>
      </div>
    } 
  />,
  4: <TextSection 
    title={"They have one thing in common: Cinnamon."} 
    description={
      <div>
        <p>
          Hover over the point and see how many times cinnamon was used and cinnamon's general riskiness.  
        </p>
      </div>
    } 
  />,
  5: <TextSection 
    description={
      <div>
        <p>
          Flavor is a crucial aspect to every bake. Judges look for those who use unconventional and inspired combinations. 
        </p>
      </div>
    } 
  />,
  6: <TextSection 
    description={
      <div>
        <p>
        Although Mat’s and Nadiya’s bakes were at least considered okay, Mat placed it safe, while Nadiya’s riskily-flavored vol-au-vents pushed the limits on creative baking. 
        </p>
      </div>
    } 
  />
}

export default class FlavorScatterplotScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: Object.keys(contentMap),
      progress: 0,
    };
  };

  getImages(imageMap, data) {
    return Object.keys(imageMap).map((key => {
      return (<Image src={imageMap[key]} display={key == data} />);
    }));
  }

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
  getDomain = (data) => {
    return datamap[data] || datamap[4];
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
            debug
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
            {(data==6||(data<=3&&data>=2))  && <ImageWrapper minHeight={150} minWidth={200}>
              {this.getImages(imageMap, data)}
            </ImageWrapper> }
           {/* {data<=3&&data>=2  && <div><ImageWrapper minHeight={150} minWidth={200}>
              {this.getImages(imageMap, data)}
            </ImageWrapper></div> } */}
          {data>3&& data<6 &&<FlavorScatterplot scatterata={this.getDomain(data)} />}
        </Graphic>
      </Main>
    );
  }
}