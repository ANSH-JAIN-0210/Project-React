import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [dice,setdice] = useState('Roll The Dice');
  const roll = ()=>{
    const random = Math.floor(Math.random()*6)+1;
    setdice(random);
  }
  return (
    <div>
      <h1>Roll The Dice</h1>
      <h3>Dice Result: {dice}</h3>
      <button onClick={roll}>Roll</button>
    </div>
  )
}

export default App