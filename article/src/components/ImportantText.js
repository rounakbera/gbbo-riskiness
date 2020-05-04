import React, { Component } from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, crimson 5%, crimson 95%, rgba(255,255,255,1) 100%);
    height: auto;
    text-align: center;
    padding: 5vh 10vw;
    margin-top: 15vh;
`
const Text = styled.span`
    color: rgba(255,250,236,1);
    width: 80vw;
    font-weight: 300;
`

export default class ImportantText extends Component {
    render(){
        return(
            <TextWrapper>
                <h1><Text>{this.props.text}</Text></h1>
            </TextWrapper>
        )
    }
}
