import React from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";  // Make sure to include your CSS for styling
import HomePage from "../assets/homepage_ss.png"
import Redirect from "../assets/redirect_ss.png"
import HomePageSmartphone from "../assets/homepage.png"
import RedirectSmartphone from "../assets/redirect.png"
import DownloadSmartphone from "../assets/download_ss.png"

const HowToDownload = () => {
  const navigate = useNavigate();

  return (
    <div className="Navigation">
      <h1>How To Download Movies</h1>
      
      {/* Container for PC/Laptop and Smartphone Instructions */}
      <div className="instructionsContainer">
        
        {/* PC/Laptop Instructions Column */}
        <div className="instructionsColumn">
          <h3>For PC or Laptop Users</h3>
          <p>Follow these steps to download movies to your PC or Laptop:</p>
          <ul>
            <li>Step 1: Visit the Home Page of our website.</li>
            <li>Step 2: Browse or search for your desired movie.</li>
              <img 
              src={HomePage} 
              alt="PC or Laptop Download Guide"
            />
            <li>Step 3: Click on the "Watch" button next to the movie.</li>
            <li>Step 4: It's redirected to the Google Drive page where you can watch or download.</li>
            <li>Step 5: Click on the "Download" button, highlighted within the green box, to proceed.</li>
              <img 
                src={Redirect} 
                alt="PC or Laptop Download Guide"
              />
            <li>Step 6: Wait for the download to finish, then enjoy the movie!</li>
          </ul>
        </div>
        
        {/* Smartphone Instructions Column */}
        <div className="instructionsColumn">
          <h3>For Smartphone Users</h3>
          <p>To download movies on your smartphone, follow these steps:</p>
          <ul>
            <li>Step 1: Open the Home Page of our website on your mobile browser.</li>
            <li>Step 2: Browse or search for your favorite movie.</li>
              <img 
              src={HomePageSmartphone} 
              alt="Smartphone Download Guide"
              style={{ width: "250px", height: "400px" }}
            />
            <li>Step 3: Tap on the "Watch" button next to the movie.</li>
            <li>Step 4: Choose an email ID to continue with the process.</li>
            <li>Step 5: It's redirected to the Google Drive page where you can watch or download.</li>
              <img 
                src={RedirectSmartphone} 
                alt="Smartphone Download Guide"
                style={{ width: "250px", height: "400px" }}
              />
            <li>Step 6: Click on the three-dot button, highlighted within the green box, to proceed.</li>
              <img 
                  src={RedirectSmartphone} 
                  alt="Smartphone Download Guide"
                  style={{ width: "250px", height: "400px" }}
                />
            <li>Step 7: Click on the "Download" button, highlighted within the green box, to proceed.</li>
              <img 
                  src={DownloadSmartphone}
                  alt="Smartphone Download Guide"
                  style={{ width: "250px", height: "400px" }}
                />
            <li>Step 8: The movie will be saved to your device's storage. Enjoy watching!</li>
          </ul>
        </div>
        
      </div>

      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="backButtonStyle">
        Back
      </button>
    </div>
  );
};

export default HowToDownload;
