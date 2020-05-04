import React from 'react';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import RiskBarchartScrollama from './components/RiskBarchartScrollama.js';
import RiskRewardPieChart from './components/RiskRewardPieChart.js';
import TitleCard from './components/TitleCard.js';
import IntroMethodology from './components/IntroMethodology.js';
import FinalViz from './components/FinalViz.js';
import StuScrollama from './components/StuScrollama.js';
import NadiyaScrollama from './components/NadiyaScrollama.js';
import MatScrollama from './components/MatScrollama.js';
import FlavorBarchartScrollama from './components/FlavorBarchartScrollama.js';
import RiskBarchartWOanim from './components/RiskBarchartWOanim.js';
import FlavorBarchartWOanim from './components/FlavorBarchartWOanim.js';
import ImportantText from './components/ImportantText.js';
import BarchartsCompiled from './components/BarchartsCompiled.js';

import {GlobalStyles, CurrentVictoryTheme} from './components/GlobalStyles.js';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Muli:400,700|Philosopher:400,700&display=swap');
      </style>
      <GlobalStyles/>
      <TitleCard/>
      <IntroMethodology />
      <ImportantText 
        text={
          ["With this data, can we find out if certain ",<b>risks</b>," and ",<b>flavor choices</b>," help win the Great British Bake Off?"]
        }
      />
      <RiskBarchartScrollama />
      <FlavorScatterplot />
      <RiskRewardPieChart baker={"Mat"} />
      <StuScrollama/>
      <MatScrollama />
      <NadiyaScrollama />   
      <FlavorBarchartScrollama /> 
      <BarchartsCompiled/>
      <FinalViz />
    </div>
  );
}

export default App;
