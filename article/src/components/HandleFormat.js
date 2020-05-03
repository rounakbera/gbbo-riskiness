import React from "react";
import styled from "styled-components";
import { Handle } from "rc-slider";

export function HandleFormat(props) {
  const { value, dragging, index, ...rest } = props;

  return (
    <FlexHandle key={index} value={value} {...rest}>
      {dragging && <Value>{value}</Value>}
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
  color: red;
  font-size: 16px;
  font-weight: bold;
`;
