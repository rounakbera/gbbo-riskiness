import React from 'react';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import RiskBarchartScrollama from './components/RiskBarchartScrollama.js';
import RiskRewardPieChart from './components/RiskRewardPieChart.js';
import TextSection from './components/TextSection.js';
import TitleCard from './components/TitleCard.js';
import SlideCard from './components/SlideCard.js';
import FinalViz from './components/FinalViz.js';
import {GlobalStyles, CurrentVictoryTheme} from './components/GlobalStyles.js';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Muli:400,700|Philosopher:400,700&display=swap');
      </style>
      <GlobalStyles/>
      <TitleCard/>
      <SlideCard title = {["Show Structure","",""]} description={["Every episode of the Great British Bake Off has three challenges: the Signature, Technical, and Showstopper. However, bakers only really get to choose their ingredients in the Signature and Showstopper, so those are what we chose to focus on.","The Signature bake is intended for contestants to display their personality and creativity; dishes here are generally comparable to something you might make at home.","On the other hand, the Showstopper bake is designed to wow the judges, both visually and flavor-wise. Bakers usually go all-out on this final dish."]}/>
      <RiskBarchartScrollama />
      <FlavorScatterplot />
      <RiskRewardPieChart baker={"Mat"} />
      <FinalViz placeLimit={5}/>
    </div>
  );
}

export default App;
