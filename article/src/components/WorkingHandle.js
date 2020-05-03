import React from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { HandleFormat } from "./HandleFormat";

const Container = styled.div`
width: 300px;
margin: 48px 48px;
float: right;
`;
//Code source for entire file: https://codesandbox.io/s/zealous-snyder-0bj4r?file=/src/App.js

export default class WorkingHandle extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        value: props.placeLimit
      }
    }

    render() {
      return (
        <Container>
          <Slider
            min={1}
            max={10}
            value={this.state.value}
            step={1}
            marks={{ 1: "1", 10: "10" }}
            onChange={() => this.setState({value: this.state.value})}
            handle={HandleFormat}
          />
        </Container>
      );
    }
  
}