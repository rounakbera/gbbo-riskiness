import React from 'react';
import styled from 'styled-components';
import SlideCard from './SlideCard';
import IntroGif from '../assets/intro.gif';
import Challenges from '../assets/challenges.png';
import DataCollection from '../assets/data-collection.png';

const Risky = styled.span`
	background-color: #656054;
	color: white;
`
const Safe = styled.span`
	background-color: #D6CCBF;
	color: black;
`
const Good = styled.span`
	background-color: #769A47;
	color: white;
`
const Bad = styled.span`
	background-color: #C56854;
	color: white;
`
const Okay = styled.span`
	background-color: #C3AD5E;
	color: white;
`

const showStructure = (
  <div>
    <p> 
      A quick primer on the Great British Bake Off: each season starts with twelve 
      contestants and consists of ten weekly episodes. One baker
      is eliminated each week until the finale, when three chefs 
      compete to be crowned the champion.
    </p>
    <p> 
      There are two judges who grade each competitor's bakes; 
      for the seasons we analyzed, they were Paul Hollywood and Mary Berry.
    </p>
  </div>
);
const episodeStructure = (
  <div>
    <p> 
      Every episode of the Great British Bake Off has three challenges: 
      the Signature, Technical, and Showstopper. However, bakers only 
      get to choose their ingredients in the Signature and Showstopper, 
      so we will focus on these two parts of the competition.
    </p>
    <p> 
      The <b>Signature</b> bake is intended for contestants to display their personality 
      and creativity, while on the other hand, the <b>Showstopper</b> bake is designed to 
      wow the judges, both visually and flavor-wise.
    </p>
  </div>
);
const dataCollection = (
  <div>
    <p> 
      We watched three seasons of the show (Series 4, 5, and 6) and took 
      meticulous notes on the <b>flavors</b> each baker used. 
    </p>
    <p> 
      We also noted the judges’ evaluation of the <b>riskiness</b> of choices and their 
      overall reaction to their bakes, such as commenting whether their flavor choices
      were "brave" or "daring." In this way, we recorded the riskiness of each bake as 
      either <Risky>risky</Risky> or <Safe>safe</Safe>.
    </p>
    <p> 
      Finally, the judges' feedback for each bake was recorded 
      as <Good>good</Good>, <Okay>okay</Okay>, or <Bad>bad</Bad>.
    </p>
  </div>
);

export default class IntroMethodology extends React.Component {
  render() {
    return (
      <SlideCard 
        title={["Show Structure","Episode Structure","Data Collection"]} 
        description={[showStructure, episodeStructure, dataCollection]} 
        images={[IntroGif, Challenges, DataCollection]}
      />
    )
  }
}