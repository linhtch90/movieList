import React from "react";

const Card = ({ movie }) => {
  return (
    <div>
      <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      <img src={} />
    </div>
  );
};

export default Card;
