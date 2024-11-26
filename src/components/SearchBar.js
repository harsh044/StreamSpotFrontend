import React, { useState } from "react";
import Movie from "./Movie";
import MoviesList from "./MoviesList";
import "../App.css";
import logo from '../assets/streamspot.png';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  async function searchMovie(query) {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/search_movie_api/search_movies?keyword=${query}`
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

      {searchQuery ? <Movie movies={movies} /> : <MoviesList />}
    </div>
  );
};

export default SearchBar;
