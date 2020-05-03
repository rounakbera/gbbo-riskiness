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

import {GlobalStyles, CurrentVictoryTheme} from './components/GlobalStyles.js';
import WorkingHandle from './components/WorkingHandle';


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
<<<<<<< HEAD
      <WorkingHandle />
=======
      <StuScrollama/>
      <MatScrollama />
      <NadiyaScrollama />    
>>>>>>> 1cee6a4c69a07f952fddf9ed314ed4d755626e41
      <FinalViz placeLimit={5}/>
    </div>
  );
}

export default App;
