import React from 'react';
import SlideCard from './SlideCard';
import IntroGif from '../assets/intro.gif';
import Challenges from '../assets/challenges.png';
import DataCollection from '../assets/data-collection.png';

const showStructure = [`
  The Great British Bake Off consists of ten weekly episodes, 
  where each season starts with twelve contestants. One of them
  is eliminated every week until the finale, where three chefs 
  compete to be crowned the champion.`,
  <br/>,<br/>,
  `There are also two judges on the show who grade each competitor's bakes; 
  for the seasons we analyzed, they were Paul Hollywood and Mary Berry.`
];
const episodeStructure = [`
  Every episode of the Great British Bake Off has three challenges: 
  the Signature, Technical, and Showstopper. However, bakers only 
  really get to choose their ingredients in the Signature and Showstopper, 
  so those are what we chose to focus on.`,
  <br/>,<br/>,
  `The Signature bake is intended for contestants to display their personality 
  and creativity, while on the other hand, the Showstopper bake is designed to 
  wow the judges, both visually and flavor-wise.`
];
const dataCollection = [`
  We watched three seasons of the show (Seasons 4, 5, and 6) and took 
  meticulous notes on the ingredients and flavor combinations each baker used. 
  We also noted the judges’ evaluation of the riskiness of choices and their 
  overall reaction to their bakes.`,
  <br/>,<br/>,
  `The qualitative risk measurement was recorded for each dish as 
  either risky or safe, and the judges' grade was recorded as 
  positive, negative, or ambiguous.`
];

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