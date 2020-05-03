import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import TextSection from './TextSection.js';

const Main = styled.div`
  padding: 0 2vw;
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
`
const Scroller = styled.div`
  flex-basis: 35%;
`
const Content = styled.div`
  margin: 0 auto 2rem auto;
  padding-top: 200px;
  padding-bottom: 200px;
  &:last-child {
    margin-bottom: 0;
  }
`
const ImageWrapper = styled.div`
  height: ${props => `${props.minHeight}px`};
  width: ${props => `${props.minWidth}px`};
`
const Image = styled.img`
  position: absolute;
  opacity: ${props => props.display ? `1` : `0`};
  transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
`

const imageMap = {
  "1": "http://placekitten.com/g/400/300",
  "2": "http://placekitten.com/g/200/300",
  "3": "http://placekitten.com/g/300/300"
};

export default class ScrollamaExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: [1, 2, 3],
      progress: 0
    };
  };

  getImages(imageMap, data) {
    return Object.keys(imageMap).map((key => {
      return (<Image src={imageMap[key]} display={key == data} />);
    }));
  }

  onStepEnter = ({ element, data }) => {
    // element.style.backgroundColor = 'lightgoldenrodyellow';
    this.setState({ data });
  };

  onStepExit = ({ element }) => {
    element.style.backgroundColor = '#fff';
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
            debug
          >
            {steps.map(value => (
              <Step data={value} key={value}>
                <Content>
                  <TextSection title = {this.props.title[value-1]} description = {this.props.description[value-1]}/>
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