import React, { useState } from "react";
import headImage from './img/head.jpeg';
import tailImage from './img/tail.jpeg';
import coinImage from './img/coin.jpeg'; 
import './App.css';

export default function App() {
  const [result, setResult] = useState("coin");

  const toss = () => {
    const coin = tossCoin();
    setResult(coin);
  };

  const tossCoin = () => {
    const random = Math.random();
    return random < 0.5 ? "head" : "tail";
  };

  const images = {
    head: headImage,
    tail: tailImage,
    coin: coinImage,
  };

  return (
    <div id="app-container">
      <h1>Heads | Tails</h1>
      <img src={images[result]} alt={result} />
      <h1>{result}</h1>
      <button onClick={()=>toss()}>Toss the Coin</button>
    </div>
  );
}
