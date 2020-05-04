import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import ImportantText from './ImportantText.js';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10vh 0 20vh 0;
`
const Graphic = styled.div`
  flex-basis: 100%;
  position: sticky;
  width: 100%;
  top: 10%;
  align-self: flex-start;
`
const Scroller = styled.div`
  flex-basis: 0%;
`
const Content = styled.div`
  height: 450px;
  width: 0;
  &:last-child {
  height: 650px;
  }
`
const ContentWrapper = styled.div`
  height: ${props => `${props.minHeight + 150}px`};
`
const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${props => props.display ? `1` : `0`};
  transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
`

export default class ImportantTextScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: Object.keys(props.content),
      progress: 0,
    };
  };

  getContent(contentMap, data) {
    return Object.keys(contentMap).map((key => {
      return (
        <TextWrapper display={key == data}>
          <ImportantText text={contentMap[key]} />
        </TextWrapper>
      );
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
            debug
          >
            {steps.map(value => (
              <Step data={value} key={value}>
                <Content>
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>
        <Graphic>
          <ContentWrapper minHeight={300} minWidth={400}>
            {this.getContent(this.props.content, data)}
          </ContentWrapper>
        </Graphic>
      </Main>
    );
  }
}