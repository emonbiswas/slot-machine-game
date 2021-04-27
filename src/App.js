import React from 'react';
import SlotM from './SlotM';



function App() {
  return (
    <>
      <h1 className="heading"> 🎰 Coding React for <span style={{fontWeight : 'bold', color: 'black'}}>Slot Machine Game</span> 🎰 </h1>

      <SlotM x="😄" y="😄" z="😄"/>
      <SlotM x="😄" y="👶" z="😄"/>
      <SlotM x="🍎" y="🍎" z="🍎"/>
      <SlotM x="🍎" y="🍌" z="🍎"/>
    </>
  );
}

export default App;
