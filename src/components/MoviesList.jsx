import React, { useEffect, useState } from "react";
import "../App.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [message, setMessage] = useState('');
  // const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  // Fetch movies from the API
  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
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
  };

  // Function to determine if the movie link is from YouTube
  // const isYouTubeLink = (url) => url.includes("youtube.com") || url.includes("youtu.be");

  // Function to determine if the movie link is from Google Drive
  // const isGoogleDriveLink = (url) => url.includes("drive.google.com");

  // Handle YouTube download (YouTube download API call)
  // const handleDownloadYouTube = async (url) => {
  //   console.log(`Download YouTube Video file from: ${url}`)};
  // //   try {
  // //     const response = await fetch(`http://127.0.0.1:8000/youtube_movies_download_api/download_movies?youtube_url=${url}`, {
  // //       method: 'GET',
  // //       headers: { 'Content-Type': 'application/json' },
  // //     });
      
  // //     if (response.ok) {
  // //       const data = await response.json();
  // //       setMessage('Download successful!');
  // //       setDownloadLink(data.download_path);
  // //     } else {
  // //       setMessage('Failed to download YouTube video.');
  // //     }
  // //   } catch (error) {
  // //     setMessage('Error downloading YouTube video.');
  // //     console.error(error);
  // //   }
  // // };

  // // Handle Google Drive download
  // const handleDownloadGoogleDrive = (url) => {
  //   console.log(`Download Google Drive file from: ${url}`);
  //   // Add Google Drive download logic here if necessary
  // };

  // Handle download based on URL type
  // const handleDownload = (url) => {
  //   if (isYouTubeLink(url)) {
  //     handleDownloadYouTube(url);
  //   } else if (isGoogleDriveLink(url)) {
  //     handleDownloadGoogleDrive(url);
  //   } else {
  //     setMessage("Unsupported URL format.");
  //   }
  // };

  // Loading Indicator
  const renderLoader = () => (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );

  // Render Movie List
  const renderMovies = () => (
    <div className="MovieList">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie" key={movie._id}>
            <div className="image-container">
              <a href={movie.movie_link} target="_blank" rel="noreferrer">
                <img
                src={movie.movie_poster_link || "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football%2Csoccer%2Csport%2Cevent-design-template-31189bebe42fe7f743327895731b60ae_screen.jpg?ts=1698356519"}
                alt={movie.movie_name}
              /></a>
            </div>
            <div className="movie-details">
              <a href={movie.movie_link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <h1 className="movie-title">{movie.movie_name}</h1>
              </a>
              <span className="category">
                <b>{movie.movie_category || "Category Coming Soon"}</b>
              </span>
              <button>
                <a href={movie.movie_link} className="button" target="_blank" rel="noopener noreferrer">
                  Watch
                </a>
              </button>

              {/* Show Download button if URL is YouTube or Google Drive */}
              {/* {isYouTubeLink(movie.movie_link) && (
                <>
                  <button>
                    <a href="/" onClick={(e) => { e.preventDefault(); handleDownload(movie.movie_link); }} className="button">
                      Download (YouTube)
                    </a>
                  </button>
                  {message && <p>{message}</p>}
                  {downloadLink && (
                    <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                      Download the video
                    </a>
                  )}
                </>
              )}
              {isGoogleDriveLink(movie.movie_link) && (
                <button>
                  <a href="/" onClick={(e) => { e.preventDefault(); handleDownload(movie.movie_link); }} className="button">
                    Download (Google Drive)
                  </a>
                </button>
              )} */}
            </div>
          </div>
        ))
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );

  return loading ? renderLoader() : renderMovies();
};

export default MoviesList;
