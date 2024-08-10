import React, { useState } from 'react';
import './App.css'

export default function App() {
  const [UserMove, setUserMove] = useState('');
  const [ComputerMove, setComputerMove] = useState('');
  const [result, setResult] = useState('');

  const play = (move) => {
    setUserMove(move);
    const computerMove = getComputerMove();
    setComputerMove(computerMove);
    if (move === 'rock') {
      const result = rock(computerMove);
      setResult(result);
    } else if (move === 'paper') {
      const result = paper(computerMove);
      setResult(result);
    } else {
      const result = scissor(computerMove);
      setResult(result);
    }
  };

  const rock = (computerMove) => {
    if (computerMove === 'rock') {
      return 'tie';
    } else if (computerMove === 'paper') {
      return 'lose';
    } else {
      return 'win';
    }
  };

  const paper = (computerMove) => {
    if (computerMove === 'rock') {
      return 'win';
    } else if (computerMove === 'paper') {
      return 'tie';
    } else {
      return 'lose';
    }
  };

  const scissor = (computerMove) => {
    if (computerMove === 'rock') {
      return 'lose';
    } else if (computerMove === 'paper') {
      return 'win';
    } else {
      return 'tie';
    }
  };

  const getComputerMove = () => {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };

  return (
    <div>
      <h1>Rock | Paper | Scissors</h1>
      <h2>Computer Move: {ComputerMove}</h2>
      <h2>User Move: {UserMove}</h2>
      <h2>Result: {result}</h2>
      <button onClick={() => play('rock')}>Rock</button>
      <button onClick={() => play('paper')}>Paper</button>
      <button onClick={() => play('scissors')}>Scissors</button>
    </div>
  );
}
