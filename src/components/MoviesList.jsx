import React, { useEffect, useState } from "react";
import "../App.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      setLoading(true);
      const response = await fetch(
        // "http://127.0.0.1:8000/get_movies_api/get_movies",
        "https://dc6nxcp3ttcv4t5cm5m7mfo2ji0wbjdj.lambda-url.ap-south-1.on.aws/",
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
    } finally {
      setLoading(false); // Stop loading after API call completes
    }
  }
  if (loading) {
    // Render loader if loading is true
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  // Render MovieList after loading is complete
  return (
    <div className="MovieList">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie" key={movie._id}>
            <div className="image-container">
              <img
                src={
                  movie.movie_poster_link
                    ? movie.movie_poster_link
                    : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football%2Csoccer%2Csport%2Cevent-design-template-31189bebe42fe7f743327895731b60ae_screen.jpg?ts=1698356519"
                }
                alt={movie.movie_name}
              />
            </div>
            <div className="movie-details">
              <h1 className="movie-title">{movie.movie_name}</h1>
              <span className="category">
                <b>{movie.movie_category ? movie.movie_category : "Category Coming Soon"}</b>
              </span>
              <button>
                <a
                  href={movie.movie_link}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch
                </a>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
};

export default MoviesList;
