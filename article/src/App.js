import React from 'react';
import BarchartExample from './components/BarchartExample.js';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import RiskRewardPieChart from './components/RiskRewardPieChart.js';
import ScrollamaExample from './components/ScrollamaExample.js';
import TitleCard from './components/TitleCard.js';
import FinalViz from './components/FinalViz.js';
import MattIntro from './components/MattIntro.js';
import MatScrollamaExample from './components/MatScrollamaExample.js';

function App() {
  return (
    <div className="App">
      <style>
				@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
			</style>
      <TitleCard/>
      <FlavorScatterplot />
      <RiskRewardPieChart baker={"Mat"} />
      <BarchartExample animate={500} />
      <MattIntro />
      <FinalViz/>
      <ScrollamaExample />
      <MatScrollamaExample />
      
    </div>
  );
}

export default App;
