// src/App.js
import React, { useState } from 'react';
import Carousel from './components/Carousel';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const initialFlashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { question: 'What is a component?', answer: 'A piece of UI that can be reused.' },
    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript that looks similar to HTML.' },
    { question: 'What is a state?', answer: 'An object that determines how that component renders & behaves.' },
    { question: 'What is a prop?', answer: 'Short for properties, used to pass data between components.' },
    { question: 'What is useState?', answer: 'A React Hook that lets you add state to function components.' },
    { question: 'What is useEffect?', answer: 'A React Hook that lets you perform side effects in function components.' },
    { question: 'What is Redux?', answer: 'A state management library for JavaScript applications.' },
    { question: 'What is a Hook?', answer: 'A function that lets you use state and other React features without writing a class.' },
    { question: 'What is a Virtual DOM?', answer: 'A lightweight copy of the actual DOM used to optimize updates.' }
  ];

  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleEdit = (index, updatedFlashcard) => {
    setFlashcards(flashcards.map((fc, i) => (i === index ? updatedFlashcard : fc)));
  };

  const handleDelete = (index) => {
    setFlashcards(flashcards.filter((_, i) => i !== index));
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      <Dashboard setFlashcards={setFlashcards} />
      <Carousel
        flashcards={flashcards}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
