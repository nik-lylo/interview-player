import React from "react";
import "./genreItem.scss";

const GenreItem = ({
  children,
  handleClick,
  filterGenre = { filterGenre },
}) => {
  return (
    <div
      className={
        filterGenre === children
          ? "genre-item genre-item__selected"
          : "genre-item"
      }
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default GenreItem;
