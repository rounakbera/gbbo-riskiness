import React from 'react';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import RiskBarchartScrollama from './components/RiskBarchartScrollama.js';
import RiskRewardPieChart from './components/RiskRewardPieChart.js';
import TitleCard from './components/TitleCard.js';
import FinalViz from './components/FinalViz.js';

function App() {
  return (
    <div className="App">
      <style>
				@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
			</style>
      <TitleCard/>
      <RiskBarchartScrollama />
      <FlavorScatterplot />
      <RiskRewardPieChart baker={"Mat"} />
      <FinalViz placeLimit={5}/>
    </div>
  );
}

export default App;
