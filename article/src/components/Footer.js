import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 60vw;
    text-align: center;
    background-color: #A3352C;
    color: rgba(255,250,236,1);
    font-size: 1rem;
    padding: 4vh 20vw;
    a{
        font-weight: 700;
        color: inherit;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
`
const Disclaimer = styled.div`
    font-size: 0.5rem;
    margin-top: 2vh;
    opacity: 0.5;
`

export default function Footer() {
    return(
        <Wrapper>
            Created primarily with <a href="https://formidable.com/open-source/victory/">Victory</a> and <a href="https://github.com/jsonkao/react-scrollama">React-Scrollama</a>. Visit our <a href="https://github.com/rounakbera/gbbo-riskiness/">Github repo</a> for more details.
            <Disclaimer>
                DISCLAIMER: Bakers are voluntarily participating in the Act of choosing their own flavors and quantity of said flavors. There are risks associated with this Act, such as psychological injury, pain, suffering, shame, or the loss of Her Majesty's blessings. These injuries or outcomes may arise from their own or other’s actions, inactions, or negligence, or the condition of the Act location(s) or facility(ies). Nonetheless, bakers assume all risks of their participation in this Act, including any events incidental to this Act.
            </Disclaimer>
        </Wrapper>
    )
}