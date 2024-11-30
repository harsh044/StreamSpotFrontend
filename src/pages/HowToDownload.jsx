import React from "react";
import { useNavigate } from "react-router-dom";

const HowToDownload = () => {
  const navigate = useNavigate();

  return (
    <div className="Navigation">
      <h1>Help To How To Download Movie</h1>
      <button onClick={() => navigate(-1)} className="backButtonStyle">
        Back
      </button>
    </div>
  );
};

export default HowToDownload;