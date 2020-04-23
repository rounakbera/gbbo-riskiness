import React from 'react';
import BarchartExample from './components/BarchartExample.js';
import ScrollamaExample from './components/ScrollamaExample.js';

function App() {
  return (
    <div className="App">
      <BarchartExample animate={500} />
      <ScrollamaExample />
    </div>
  );
}

export default App;
