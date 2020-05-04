import React from 'react';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import RiskBarchartScrollama from './components/RiskBarchartScrollama.js';
import RiskRewardPieChart from './components/RiskRewardPieChart.js';
import TextSection from './components/TextSection.js';
import TitleCard from './components/TitleCard.js';
import SlideCard from './components/SlideCard.js';
import FinalViz from './components/FinalViz.js';
import StuScrollama from './components/StuScrollama.js';
import NadiyaScrollama from './components/NadiyaScrollama.js';
import MatScrollama from './components/MatScrollama.js';
import FlavorBarchartScrollama from './components/FlavorBarchartScrollama.js';
import RiskBarchartWOanim from './components/RiskBarchartWOanim.js';
import FlavorBarchartWOanim from './components/FlavorBarchartWOanim.js';
import IntroGif from './assets/intro.gif';
import Challenges from './assets/challenges.png';
import DataCollection from './assets/data-collection.png';
import ImportantText from './components/ImportantText.js';

import {GlobalStyles, CurrentVictoryTheme} from './components/GlobalStyles.js';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Muli:400,700|Philosopher:400,700&display=swap');
      </style>
      <GlobalStyles/>
      <TitleCard/>
      <SlideCard title = {["Show Structure","Episode Structure","Data Collection"]} description={[["The Great British Bake Off consists of ten weekly episodes, where each season starts with twelve contestants. One of them is eliminated every week until the finale, where three chefs compete to be crowned the champion.",<br/>,<br/>, "There are also two judges on the show who grade each competitor's bakes; for the seasons we analyzed, they were Paul Hollywood and Mary Berry."],["Every episode of the Great British Bake Off has three challenges: the Signature, Technical, and Showstopper. However, bakers only really get to choose their ingredients in the Signature and Showstopper, so those are what we chose to focus on.",<br/>,<br/>,"The Signature bake is intended for contestants to display their personality and creativity, while on the other hand, the Showstopper bake is designed to wow the judges, both visually and flavor-wise."],["We watched three seasons of the show (Seasons 4, 5, and 6) and took meticulous notes on the ingredients and flavor combinations each baker used. We also noted the judges’ evaluation of the riskiness of choices and their overall reaction to their bakes.",<br/>,<br/>,"The qualitative risk measurement was recorded for each dish as either risky or safe, and the judges' grade was recorded as positive, negative, or ambiguous."]]} images={[IntroGif,Challenges,DataCollection]}/>
      <ImportantText text={["And we started questioning–what does it take to win this show? Is it ", <strong>flavor combinations</strong>, ", " , <strong>innovative ideas</strong>, ", or simply being ", <strong>a solid baker</strong> , "?"]}/>
      <RiskBarchartScrollama />
      <FlavorScatterplot />
      <RiskRewardPieChart baker={"Mat"} />
      <StuScrollama/>
      <MatScrollama />
      <NadiyaScrollama />   
      <FlavorBarchartScrollama /> 
      <RiskBarchartWOanim series = {5}/>
      <FlavorBarchartWOanim series = {4}/>
      <NadiyaScrollama />
      <FinalViz />
    </div>
  );
}

export default App;
