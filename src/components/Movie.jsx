import React from "react";
import "../App.css";

const Movie = (props) => {
  const { movies } = props;

  return (
    <div className="MovieList">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie._id}>
            <div className="image-container">
              <img
                src={movie.movie_poster_link}
                alt={movie.movie_name}
              />
            </div>

            <div className="movie-details">
              <h1 className="movie-title">{movie.movie_name}</h1>
              <button><a href="/" class="button">Watch</a></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;