import React from 'react';
import propTypes from 'prop-types';

export default function Card({ title }) {
  return (
    <div className="card w-96 bg-base-100 max-w-sm mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-out h-60">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          {/* <button type="submit" className="btn btn-primary">
            Buy Now
          </button> */}
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: propTypes.string.isRequired,
};
