import React from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import styled from 'styled-components';
// import Col from 'react-bootstrap/Col'
import RiskBar from './RiskBarchartWOanim.js';
import NFlavorsBar from './FlavorBarchartWOanim.js';



const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 10px;
    color: #444;
  `
  
const Box = styled.div `
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
  `

export default class BarchartsCompiled extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
        return ( 
            <Wrapper>
                <RiskBar series={4}/>
                <RiskBar series={5}/>
                <RiskBar series={6}/>
                <NFlavorsBar series={4}/>
                <NFlavorsBar series={5}/>
                <NFlavorsBar series={6}/>
                
            </Wrapper>
        )
    }
}