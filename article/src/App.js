import React from 'react';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import RiskBarchartScrollama from './components/RiskBarchartScrollama.js';
import RiskRewardPieChart from './components/RiskRewardPieChart.js';
import TextSection from './components/TextSection.js';
import TitleCard from './components/TitleCard.js';
import SlideCard from './components/SlideCard.js';
import FinalViz from './components/FinalViz.js';
import MatScrollamaExample from './components/MatScrollamaExample.js';
import NadiyaScrollama from './components/NadiyaScrollama.js';
import {GlobalStyles, CurrentVictoryTheme} from './components/GlobalStyles.js';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Muli:400,700|Philosopher:400,700&display=swap');
      </style>
      <GlobalStyles/>
      <TitleCard/>
      <TextSection title={"Section Header"} description={"Some good content."}/>
      <SlideCard />
      <RiskBarchartScrollama />
      <FlavorScatterplot />
      <RiskRewardPieChart baker={"Mat"} />
      <StuScrollama/>
      <MatScrollamaExample />
      <NadiyaScrollama />    
      <FinalViz placeLimit={5}/>
    </div>
  );
}

export default App;
