import React from 'react';
import SlideCard from './SlideCard';
import IntroGif from '../assets/intro.gif';
import Challenges from '../assets/challenges.png';
import DataCollection from '../assets/data-collection.png';

const showStructure = (
  <div>
    <p> 
      Each season of the Great British Bake Off starts with twelve 
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
      We also noted the judges’ evaluation of the <b>riskiness</b> of choices and their 
      overall reaction to their bakes.
    </p>
    <p> 
      The qualitative risk measurement was recorded for each dish as 
      either risky or safe, and the judges' grade was recorded as 
      positive, negative, or ambiguous.
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