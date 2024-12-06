import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Movie from "./Movie";
import MoviesList from "./MoviesList";
import "../App.css";
import logo from "../assets/streamspot.png";
import Coffee from "../assets/mug-hot-solid.svg";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For navigation

  async function searchMovie(query) {
    try {
      setLoading(true);
      const response = await fetch(
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
    } finally {
      setLoading(false);
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
    <div className="search-container">
      {/* Logo and Search Bar */}
      <form action="" className="form">
        <div className="logo-container">
          <a href="/"><img src={logo} alt="StreamSpot" className="logo" /></a>
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

      {/* Buttons below the logo and search */}
      <div className="buttons-container">
        <button onClick={() => navigate("/how-to-download")}>How to Download Movies</button>
        <button onClick={() => navigate("/request-movie")}>Request a Movie</button>
        {/* <button className="pay_button"><a href="https://rzp.io/rzp/1Vu2iM1z" target="_blank" rel="noreferrer">Buy Me a Coffee <img src={Coffee} alt="Coffee Icon" width="24" height="24" /></a></button> } Test Mode */}
        <button className="pay_button"><a href="https://rzp.io/rzp/VCeWG1a" target="_blank" rel="noreferrer">Buy Me a Coffee <img src={Coffee} alt="Coffee Icon" width="24" height="24" /></a></button> {/*Live Mode */}
      </div>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <div className="loader"></div>
      ) : (
        searchQuery ? <Movie movies={movies} /> : <MoviesList />
      )}
    </div>
  );
};

export default SearchBar;
