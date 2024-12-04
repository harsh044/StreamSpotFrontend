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
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en"); // Language state

  // Translations for labels and placeholders
  const translations = {
    en: {
      title: "Request a Movie",
      description: "Let us know which movie you'd like to see!",
      firstName: "First Name:",
      lastName: "Last Name:",
      movieName: "Movie Name You Want:",
      placeholderFirstName: "Enter your first name",
      placeholderLastName: "Enter your last name",
      placeholderMovieName: "Enter the movie name",
      submit: "Submit",
      submitting: "Submitting...",
      back: "Back",
    },
    mr: {
      title: "चित्रपटाची मागणी करा",
      description: "आपल्याला कोणता चित्रपट पहायचा आहे ते कळवा!",
      firstName: "पहिले नाव:",
      lastName: "आडनाव:",
      movieName: "तुम्हाला हवा असलेला चित्रपट:",
      placeholderFirstName: "तुमचे पहिले नाव प्रविष्ट करा",
      placeholderLastName: "तुमचे आडनाव प्रविष्ट करा",
      placeholderMovieName: "चित्रपटाचे नाव प्रविष्ट करा",
      submit: "सबमिट करा",
      submitting: "सबमिट करत आहे...",
      back: "मागे जा",
    },
    hi: {
      title: "फिल्म का अनुरोध करें",
      description: "हमें बताएं कि आप कौन सी फिल्म देखना चाहते हैं!",
      firstName: "पहला नाम:",
      lastName: "अंतिम नाम:",
      movieName: "आप कौन सी फिल्म चाहते हैं:",
      placeholderFirstName: "अपना पहला नाम दर्ज करें",
      placeholderLastName: "अपना अंतिम नाम दर्ज करें",
      placeholderMovieName: "फिल्म का नाम दर्ज करें",
      submit: "सबमिट करें",
      submitting: "सबमिट कर रहा है...",
      back: "वापस",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, movieName } = formData;

    if (!firstName || !lastName || !movieName) {
      setMessage("Please fill all the fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://b7zllnd2wxcplch3hjp5edeoia0lgrwk.lambda-url.ap-south-1.on.aws/?first_name=${firstName}&last_name=${lastName}&movie_name=${movieName}`,
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
      setLoading(false);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language]; // Current language translations

  return (
    <div className="request-container">
      <h1>{t.title}</h1>
      <p>{t.description}</p>

      <div className="language-toggle">
        <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("mr")}>मराठी</button>
        <button onClick={() => handleLanguageChange("hi")}>हिंदी</button>
      </div>

      <form onSubmit={handleSubmit} className="request-form">
        <div className="form-group">
          <label>{t.firstName}</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder={t.placeholderFirstName}
          />
        </div>
        <div className="form-group">
          <label>{t.lastName}</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder={t.placeholderLastName}
          />
        </div>
        <div className="form-group">
          <label>{t.movieName}</label>
          <input
            type="text"
            name="movieName"
            value={formData.movieName}
            onChange={handleChange}
            required
            placeholder={t.placeholderMovieName}
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? t.submitting : t.submit}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
      <button onClick={() => navigate(-1)} className="back-button">
        {t.back}
      </button>
    </div>
  );
};

export default RequestMovie;