import React from 'react';
import BarchartExample from './components/BarchartExample.js';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import ScrollamaExample from './components/ScrollamaExample.js';
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
      <BarchartExample animate={500} />
      <ScrollamaExample />
    </div>
  );
}

export default App;
