import React from "react";
import WatchList from "./WatchList";

const MovieList = (props) => {
  const watchlist = props.WatchList;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          style={{ padding: " 0px", flexShrink: "inherit" }}
        >
          <img src={movie.Poster} alt="movie"></img>
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
          <div onClick={() => props.handlelistClick(movie)} className="watch">
            <WatchList />
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
