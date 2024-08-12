import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ flashcard, onNext, onPrevious, onDelete, onEdit }) {
  const [flipped, setFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newQuestion, setNewQuestion] = useState(flashcard?.question || '');
  const [newAnswer, setNewAnswer] = useState(flashcard?.answer || '');

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleEdit = () => {
    onEdit({ question: newQuestion, answer: newAnswer });
    setIsEditing(false);
  };

  if (!flashcard) return null;

  return (
    <div className="flashcard">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="New Question"
          />
          <input
            type="text"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="New Answer"
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="front">{flashcard.question}</div>
            <div className="back">{flashcard.answer}</div>
          </div>
          <button onClick={onPrevious}></button>
          <button onClick={onNext}></button>
          <button onClick={onDelete}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Flashcard;
