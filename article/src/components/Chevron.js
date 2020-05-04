import React, { Component } from 'react';
import styled from 'styled-components';

const Arrow = styled.span`
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 0.15em;
    position: relative;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 0.45em;
    transform: rotate(135deg);
    animation: expand 1s ease-in infinite alternate;

    @keyframes expand {
        0% {
            transform: scale(1.0) rotate(135deg);
        }
        100% {
            transform: scale(1.2) rotate(135deg);
        }
    }
`
const Wrapper = styled.div`
    width: 5vw;
    height: 5vw;
    display: block;
    padding-left: 47%;
`

export default class Chevron extends Component {
    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(e){
        console.log("clicked");
        var elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
    }

    render(){
        return(
            <Wrapper onClick={this.handleClick}>
                <Arrow/>
            </Wrapper>
        )
    }
}