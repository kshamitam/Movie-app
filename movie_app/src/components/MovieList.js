import React from "react";

const MovieList = (props) => {
  const ActionComponent = props.ActionComponent; // Get the correct button component dynamically

  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          style={{
            padding: "0px",
            flexShrink: "inherit",
            width: "fit-content",
          }}
          key={movie.imdbID} // Add a unique key
        >
          <img src={movie.Poster} alt="movie" />
          <div
            className="overlay d-flex align-items-center justify-content-center"
            style={{ width: "max-content" }}
          >
            <p>
              Title : {movie.Title}
              <br />
              Year : {movie.Year}
              <br />
              Type : {movie.Type}
            </p>
          </div>
          {/* Show "ADD" or "REMOVE" dynamically */}
          <div
            onClick={() => props.handlelistClick(movie)}
            style={{ background: "transparent" }}
          >
            <ActionComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
