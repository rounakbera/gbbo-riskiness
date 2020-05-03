import React from "react";
import styled from "styled-components";
import { Handle } from "rc-slider";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

//Code source for entire file: https://codesandbox.io/s/zealous-snyder-0bj4r?file=/src/App.js

export default function WorkingHandle() {
    const [value, setValue] = useState(7);
  
    return (
      <Container>
        <Slider
          min={1}
          max={10}
          value={value}
          step={1}
          marks={{ 1: "1", 10: "10" }}
          onChange={setValue}
          handle={handle}
        />
      </Container>
    );
  }
  
  const Container = styled.div`
    width: 300px;
    margin: 48px 48px;
    float: right;
  `;

function handle(props) {
  const { value, dragging, index, ...rest } = props;

  return (
    <FlexHandle key={index} value={value} {...rest}>
      {dragging && <Value>{value} </Value>}
    </FlexHandle>
  );
}

// If you want to center the text with the handle
const FlexHandle = styled(Handle)`
  display: flex;
  justify-content: center;
`;

// By default the text is rendered inside the handle, so we need to take it out
// white-space: nowrap; ensures that it doesn't break on a new line, due to the handle being very small
const Value = styled.div`
  margin-top: -32px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;
`;