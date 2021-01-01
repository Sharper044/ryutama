import React from 'react';
import './App.css';
import Header from './components/Header'
import RandTownGen from './components/RandTownGen';
import RandMarketGen from './components/RandMarketGen';
import RandEventGen from './components/RandEventGen';
import RandPersonGen from './components/RandPersonGen';
import RandEncounterGen from './components/RandEncounterGen';
import RandJobGen from './components/RandJobGen';
import RandMonsterEncounterGen from './components/RandMonsterEncounterGen';
import RandTreasureGen from './components/RandTreasureGen';

function App() {
  return (
    <div className="App">
      <Header/>
      <RandTownGen/>
      <RandMarketGen/>
      <RandEventGen/>
      <RandPersonGen/>
      <RandEncounterGen/>
      <RandJobGen/>
      <RandMonsterEncounterGen/>
      <RandTreasureGen/>
    </div>
  );
}

export default App;

/* 
  Ideas: 
  - random terrain & weather generator
  - Random badge creator
  
  
  - xp calculator (bi-directional)
  - random herb gathering generator 
  - random franchise creator
  - travel/camp/direction check calculator
  - bonus calculator
  - Scenario/event planner
  - character creator
  - ryuujin creator

 */