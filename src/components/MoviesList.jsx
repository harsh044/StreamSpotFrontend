import React, { useEffect, useState } from "react";
import "../App.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/get_movies_api/get_movies",
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMovies(data.data);
      } else {
        console.error("Failed to fetch movies.");
      }
    } catch (error) {
      console.error("An error occurred while fetching movies:", error);
    }
  }

  return (
    <div className="MovieList">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie._id}>
            <div className="image-container">
              <img
                src={movie.movie_poster_link ? movie.movie_poster_link: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football%2Csoccer%2Csport%2Cevent-design-template-31189bebe42fe7f743327895731b60ae_screen.jpg?ts=1698356519"}
                alt={movie.movie_name}
              />
            </div>

            <div className="movie-details">
              <h1 className="movie-title">{movie.movie_name}</h1>
              <span className="category"><b>{movie.movie_category ? movie.movie_category : "Category Coming Soon"}</b></span>
              <button><a href={movie.movie_link} class="button" target="_blank" rel="noopener noreferrer">Watch</a></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
