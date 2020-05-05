import React from 'react';
import FlavorScatterplotScrollama from './components/FlavorScatterplotScrollama.js';
import RiskBarchartScrollama from './components/RiskBarchartScrollama.js';
import RiskRewardPieChart from './components/RiskRewardPieChart.js';
import TitleCard from './components/TitleCard.js';
import IntroMethodology from './components/IntroMethodology.js';
import FinalViz from './components/FinalViz.js';
import StuScrollama from './components/StuScrollama.js';
import NadiyaScrollama from './components/NadiyaScrollama.js';
import MatScrollama from './components/MatScrollama.js';
import FlavorBarchartScrollama from './components/FlavorBarchartScrollama.js';
import ImportantTextScrollama from './components/ImportantTextScrollama.js';
import BarchartsCompiled from './components/BarchartsCompiled.js';
import QuoteScrollama from './components/QuoteScrollama.js';

import {GlobalStyles, CustomVictoryTheme} from './components/GlobalStyles.js';
import Dropdown from './components/Dropdown.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Muli:400,700|Philosopher:400,700&display=swap');
      </style>
      <GlobalStyles/>
      <TitleCard/>
      <IntroMethodology />
      <ImportantTextScrollama 
        content={{
          1: ["With this data, can we find out if certain ",<b>risks</b>," and ",<b>flavor choices</b>," help win the Great British Bake Off?"],
        }}
      />
      <RiskBarchartScrollama />
<<<<<<< HEAD
      {/* <RiskRewardPieChart baker={"Mat"} /> */}
=======
      {/* <FlavorScatterplot /> */}
      {/* <RiskRewardPieChart baker={"Mat"} pieWidth={500} standalone={true}/> */}
>>>>>>> tian
      <StuScrollama/>
      <MatScrollama />
      <NadiyaScrollama />  
      <ImportantTextScrollama 
        content={{
          1: ["Now that we've seen few bakes, what is the relationship between ingredients and riskiness?"],
        }}
      />
      <FlavorScatterplotScrollama /> 
      <ImportantTextScrollama 
        content={{
          1: ["Since using multiple flavors can be risky, creating successful combinations helps to exemplify a great baker."],
          2: ["With this in mind, let's see how the ", <b>number of flavors</b>, " that a baker chooses affects their overall performance."],
        }}
      />
      <FlavorBarchartScrollama /> 
      <BarchartsCompiled/>
      <QuoteScrollama />
      <FinalViz />
      <Dropdown/>
      <Footer/>
    </div>
  );
}

export default App;
