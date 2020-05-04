import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import QuoteBlank from '../assets/quote-blank.jpg';
import QuoteMary from '../assets/quote-mary.jpg';
import QuotePaul from '../assets/quote-paul.jpg';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10vh 0 20vh 0;
`
const Graphic = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, #A3352C 5%, #A3352C 95%, rgba(255,255,255,1) 100%);
  position: sticky;
  align-self: flex-start;
  flex-basis: 100%;
  width: 100%;
  top: 15%;
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
const QuoteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
const Quote = styled.img`
  height: 80%;
`

const quoteMap = {
  1: QuoteMary,
  2: QuotePaul,
};

export default class ImportantTextScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: [1, 2],
      progress: 0,
    };
  };

  getContent(contentMap, data) {
    return Object.keys(contentMap).map((key => {
      return (
        <QuoteWrapper display={key == data}>
          <Quote src={contentMap[key]} />
        </QuoteWrapper>
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
            <QuoteWrapper display={true}>
              <Quote src={QuoteBlank} />
            </QuoteWrapper>
            {this.getContent(quoteMap, data)}
          </ContentWrapper>
        </Graphic>
      </Main>
    );
  }
}