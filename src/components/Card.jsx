import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, text, buttonUrl, buttonLabel }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{text}</p>
        <a href={buttonUrl} className="btn btn-primary mt-auto">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default Card;