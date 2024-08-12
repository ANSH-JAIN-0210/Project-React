import React, { useState } from 'react';
import './Form.css';

function Form({ onAdd }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ question, answer });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        required
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        required
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
}

export default Form;
