import React from 'react';
import BarchartExample from './components/BarchartExample.js';
import FlavorScatterplot from './components/FlavorScatterplot.js';
import ScrollamaExample from './components/ScrollamaExample.js';

const data = require('./data/flavorRiskinessToPerformance.json');

function App() {
  return (
    <div className="App">
      <FlavorScatterplot data={data} />
      <BarchartExample animate={500} />
      <ScrollamaExample />
    </div>
  );
}

export default App;
