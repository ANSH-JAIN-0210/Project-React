// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

function Carousel({ flashcards, onDelete }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {flashcards.map((flashcard, index) => (
          <div key={index} className="carousel-item">
            <div className="card">
              <div className="front">{flashcard.question}</div>
              <div className="back">{flashcard.answer}</div>
            </div>
            <div className="edit-delete-buttons">
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
