import React from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import styled from 'styled-components';
// import Col from 'react-bootstrap/Col'
import RiskBar from './RiskBarchartWOanim.js';
import NFlavorsBar from './FlavorBarchartWOanim.js';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1% 33% 33% 33%;
`

export default class BarchartsCompiled extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
    return ( 
      <Wrapper>
        <div />
        <RiskBar series={4}/>
        <RiskBar series={5}/>
        <RiskBar series={6}/>
        <div />
        <NFlavorsBar series={4}/>
        <NFlavorsBar series={5}/>
        <NFlavorsBar series={6}/>
      </Wrapper>
    )
  }
}