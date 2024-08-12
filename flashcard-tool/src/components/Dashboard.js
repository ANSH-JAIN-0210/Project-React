// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ setFlashcards }) {
  const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFlashcard.question && newFlashcard.answer) {
      setFlashcards(prevFlashcards => [...prevFlashcards, newFlashcard]);
      setNewFlashcard({ question: '', answer: '' });
    }
  };

  return (
    <div className="dashboard">
      <h2>Add New Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Question"
          value={newFlashcard.question}
          onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFlashcard.answer}
          onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })}
        />
        <button type="submit">Add Flashcard</button>
      </form>
    </div>
  );
}

export default Dashboard;
