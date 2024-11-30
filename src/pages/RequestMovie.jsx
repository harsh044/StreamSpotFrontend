import React from "react";
import { useNavigate } from "react-router-dom";

const RequestMovie = () => {
  const navigate = useNavigate();

  return (
    <div className="Navigation">
      <h1>Request Movie</h1>
      <p>This page User Send Me a Movies They Want</p>
      <button onClick={() => navigate(-1)} className="backButtonStyle">
        Back
      </button>
    </div>
  );
};

export default RequestMovie;