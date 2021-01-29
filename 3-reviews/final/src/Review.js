import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  return (
    <article className="review">
      <div className="img-container">
        <img
          src="https://i.pinimg.com/564x/5a/5d/bc/5a5dbcaa85bb335715a6643a8bbf4c3f.jpg"
          alt=""
          className="person-img"
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">In-sun</h4>
      <p className="job">Actress</p>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora
        fugiat magnam ut fuga totam unde voluptatibus, minus non quae illo
        corporis rerum saepe beatae facilis. Veritatis sit quaerat
        exercitationem.
      </p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">surprise me</button>
    </article>
  );
};

export default Review;
