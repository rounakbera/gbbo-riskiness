import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import Nadiya from './Nadiya.js';
import NadiyaIcedBuns from '../assets/nadiya-icebuns.png';
import NadiyaVolAuVents from '../assets/nadiya-volauvents.png';
import NadiyaPic from '../assets/nadiya2.jpg';
import NadiyaPie from '../assets/nadiyapie.png';
import MatPie from '../assets/matpie.png';



const Main = styled.div`
  padding: 10vh 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
`
const Graphic = styled.div`
  position: sticky;
  width: 100%;
  padding: 2rem 0;
  top: 1rem;
  align-self: flex-start;
`
const Scroller = styled.div`
  flex-basis: 100%;
`
const Content = styled.div`
  margin: 0 auto 2rem auto;
  padding: 15vh 0 5vh 5vw;
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
  height: 80%;
  top: 25%;
  left: 10%;
`

const imageMap = {
  1: NadiyaPic,
  2: NadiyaVolAuVents,
  3: NadiyaIcedBuns,
  4: NadiyaPie
};

export default class NadiyaScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: Object.keys(imageMap),
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
                  <Nadiya data={value}/>
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>
        <Graphic>
          <ImageWrapper minHeight={300} minWidth={400}>
            {this.getImages(imageMap, data)}
          </ImageWrapper>
        </Graphic>
      </Main>
    );
  }
}