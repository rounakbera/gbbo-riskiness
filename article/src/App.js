import React from 'react';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import RiskBarchartScrollama from './components/RiskBarchartScrollama.js';
import TitleCard from './components/TitleCard.js';

const data = require('./data/flavorRiskinessToPerformance.json');

function App() {
  return (
    <div className="App">
      <style>
				@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
			</style>
      <TitleCard/>
      <FlavorScatterplot data={data} />
      <RiskBarchartScrollama />
    </div>
  );
}

export default App;
