import React, { useState } from "react";
import Movie from "./Movie";
import MoviesList from "./MoviesList";
import "../App.css";
import logo from '../assets/streamspot.png';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function searchMovie(query) {
    try {
      setLoading(true);
      const response = await fetch(
        // `http://127.0.0.1:8000/search_movie_api/search_movies?keyword=${query}`
        `https://byy6o4kam7gnld5jjcrjtynq3a0gcqje.lambda-url.ap-south-1.on.aws/?keyword=${query}`
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.data);
        setError("");
      } else {
        setError("Sorry, no movies were found for your search query. Please try a different search.");
        setMovies([]);
      }
    } catch (error) {
      setError("Sorry, no movies were found for your search query. Please try a different search.");
      setMovies([]);
    }
    finally 
    {
      setLoading(false); // Stop loading when the API call is complete
    }
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      searchMovie(query);
    } else {
      setMovies([]);
      setError("");
    }
  }

  return (
    <div>
      <form action="" className="form">
        <div>
          <a href="/"><img src={logo} alt="StreamSpot"></img></a>
          <h1><a href="/">StreamSpot</a></h1>
        </div>

        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchQuery}
          className="search-input"
        />
      </form>
      {error && <p className="error">{error}</p>}

      {loading ? ( // Show loader if loading is true
        <div className="loader"></div>
      ) : (
        searchQuery ? <Movie movies={movies} /> : <MoviesList />
      )}
    </div>
  );
};

export default SearchBar;
