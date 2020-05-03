import React from 'react';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import RiskBarchartScrollama from './components/RiskBarchartScrollama.js';
import RiskRewardPieChart from './components/RiskRewardPieChart.js';
import TextSection from './components/TextSection.js';
import TitleCard from './components/TitleCard.js';
import FinalViz from './components/FinalViz.js';

function App() {
  return (
    <div className="App">
      <style>
				@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
			</style>
      <TitleCard />
      <TextSection title={"Section Header"} description={"Some good content."}/>
      <RiskBarchartScrollama />
      <FlavorScatterplot />
      <RiskRewardPieChart baker={"Mat"} />
      <FinalViz/>
    </div>
  );
}

export default App;
