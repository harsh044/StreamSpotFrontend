import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestMovie = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    movieName: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  // Update form data when input values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, movieName } = formData;

    if (!firstName || !lastName || !movieName) {
      setMessage("Please fill all the fields.");
      return;
    }

    setLoading(true); // Start loading indicator

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/streamspot_sendmail_api/streamspot_sendmail?first_name=${firstName}&last_name=${lastName}&movie_name=${movieName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setMessage("Your request has been sent successfully!");
        setFormData({ firstName: "", lastName: "", movieName: "" });
      } else {
        setMessage("Failed to send the request. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading indicator after the request is completed
    }
  };

  return (
    <div className="request-container">
      <h1>Request a Movie</h1>
      <p>Let us know which movie you'd like to see!</p>
      <form onSubmit={handleSubmit} className="request-form">
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
          />
        </div>
        <div className="form-group">
          <label>Movie Name You Want:</label>
          <input
            type="text"
            name="movieName"
            value={formData.movieName}
            onChange={handleChange}
            required
            placeholder="Enter the movie name"
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
    </div>
  );
};

export default RequestMovie;