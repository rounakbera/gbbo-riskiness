import React from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import styled from 'styled-components';
// import Col from 'react-bootstrap/Col'
import RiskBar from './RiskBarchartWOanim.js';
import NFlavorsBar from './FlavorBarchartWOanim.js';
import TextSection from './TextSection'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1% 33% 33% 33%;
  padding: 20px;
`
const Top = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 20px

`
const Bottom = styled.div`
  margin-left: 40px;
  margin-right: 40px;
`

export default class BarchartsCompiled extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
    return ( 
      <div>
      <TextSection
      title={"Extrapolating risk and flavor combination trends to other seasons..."} />
      <Wrapper>
        <div />
        <Top>
          <RiskBar series={4}/>
        </Top>
        <Top>
          <RiskBar series={5}/>
        </Top>
        <Top>
          <RiskBar series={6}/>
        </Top>
        <div />
        <Bottom>
          <NFlavorsBar series={4}/>
        </Bottom>
        <Bottom>
          <NFlavorsBar series={5}/>
        </Bottom>
        <Bottom>
          <NFlavorsBar series={6}/>
        </Bottom>
      </Wrapper>
      </div>
    )
  }
}