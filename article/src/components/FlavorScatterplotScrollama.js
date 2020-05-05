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
  0: Volvauvent,
  1: Carrotcake,
  5:Carrotcake
};
var datascatter = require('../data/flavorRiskinessToPerformance.json');
const datamap={
  2: [{
    "riskiness": 0.321428571,
    "flavor": "cinnamon",
    "performance": "GOOD",
    "bad": 0.25,
    "good": 0.392857143,
    "neutral": 0.357142857,
    "controversy": 0.142857143,
    "count": 28
  }],
  3: datascatter,
  4: datascatter
}
const domainMap = {
  2: {x: [0.305357142, 0.355357142], y: [26.6, 29.85]},
  3: {x: [0,1], y: [0, 65]},
  4: {x: [0,1], y: [0, 65]}
};

const zoomMap = {
  2: false,
  3: true
}


const contentMap = {
  1: <TextSection 
    title={"Let’s look at back at two of the bakes:"}
    description={
      <div>
        <p>
          <b>Nadiya's Vol-au-Vents</b>
        </p>
        <p>
         and <b>Mat's Sugar Free Carrot Cake</b>
        </p>
      </div>
    } 
  />,
  2: <TextSection 
    title={"They have one thing in common: Cinnamon."} 
    description={
      <div>
        <p>
          Hover over the point and see how many times <b>cinnamon</b> was used throughout the season and percentage of bakes with cinnamon that are considered risky.  
        </p>
      </div>
    } 
  />,
  3: <TextSection 
    description={
      <div>
        <p>
          Flavor is a crucial aspect to every bake. Judges look for those who use unconventional and inspired combinations. 
        </p>
      </div>
    } 
  />,
  4: <TextSection 
  description={
    <div>
      <p>
      Cinnamon is a decently low risk and commonly used ingredient. Mat chose to pair it with the less risky ingredients like <b>honey (36%)</b> and <b>ginger (42%)</b>. Conversely, Nadiya went with the more risky choice of <b>cardamom (68%)</b> 
      </p>
    </div>
  } 
/>,
  5: <TextSection 
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

 
  getData = (data) => {
    return datamap[data] || datamap[2];
  }
  getDomain = (data) => {
    return domainMap[data] || domainMap[2];
  }
  getZoom = (data) => {
    return zoomMap[data] || zoomMap[2];
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
            offset={0.55}
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
            {(data==5||(data==1))  && <ImageWrapper minHeight={150} minWidth={200}>
              {this.getImages(imageMap, data)}
            </ImageWrapper> }
          {(data>1 && (data<5)) &&<FlavorScatterplot scatterdata={this.getData(data)} domain= {this.getDomain(data)} zoom={this.getZoom(data)} />}
        </Graphic>
      </Main>
    );
  }
}