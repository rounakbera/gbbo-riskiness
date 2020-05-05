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
  margin-left: 50px;
  margin-right: 50px;

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
      title={"Extrapolating risk and flavor combination trends to other seasons..."}
      description ={
        <p>
          We see that the same trends continue with series 4 and 5: with a higher investment in complex flavor combination, bakers see a higher return in their ranking on the show. 
          In other words, bakers can only succeed by using both unconventional ingredients and a large variety of ingredients.
         </p>
      } />
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