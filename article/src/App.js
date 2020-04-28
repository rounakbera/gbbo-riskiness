import React from 'react';
import BarchartExample from './components/BarchartExample.js';
import ScrollamaExample from './components/ScrollamaExample.js';
import TitleCard from './components/TitleCard.js';

function App() {
  return (
    <div className="App">
      <style>
				@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
			</style>
      <TitleCard/>
      <BarchartExample animate={500} />
      <ScrollamaExample />
    </div>
  );
}

export default App;
