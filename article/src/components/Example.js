import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';

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
  padding: 5rem 0;
  top: 160px;
  align-self: flex-start;
  background-color: #aaa;
  & p {
    font-size: 5rem;
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

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: [10, 20, 30],
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
    this.setState({ progress });
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
                  <p>step value: {value}</p>
                  <p>{value === data && progress}</p>
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>
        <Graphic>
          <p>{data}</p>
        </Graphic>
      </Main>
    );
  }
}