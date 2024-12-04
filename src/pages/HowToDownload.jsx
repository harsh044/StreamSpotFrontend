import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css"; // Make sure to include your CSS for styling
import HomePage from "../assets/homepage_ss.png";
import Redirect from "../assets/redirect_ss.png";
import HomePageSmartphone from "../assets/homepage.png";
import RedirectSmartphone from "../assets/redirect.png";
import DownloadSmartphone from "../assets/download_ss.png";

const HowToDownload = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("en"); // State for current language

  // Translations for instructions
  const translations = {
    en: {
      title: "How To Download Movies",
      pcTitle: "For PC or Laptop Users",
      pcSteps: [
        "Step 1: Visit the Home Page of our website.",
        "Step 2: Browse or search for your desired movie.",
        "Step 3: Click on the 'Watch' button next to the movie.",
        "Step 4: It's redirected to the Google Drive page where you can watch or download.",
        "Step 5: Click on the 'Download' button, highlighted within the green box, to proceed.",
        "Step 6: Wait for the download to finish, then enjoy the movie!",
        "Step 7: For ZIP files, extract the contents using a file extraction tool like WinRAR or 7-Zip."
      ],
      smartphoneTitle: "For Smartphone Users",
      smartphoneSteps: [
        "Step 1: Open the Home Page of our website on your mobile browser.",
        "Step 2: Browse or search for your favorite movie.",
        "Step 3: Tap on the 'Watch' button next to the movie.",
        "Step 4: Choose an email ID to continue with the process.",
        "Step 5: It's redirected to the Google Drive page where you can watch or download.",
        "Step 6: Click on the three-dot button, highlighted within the green box, to proceed.",
        "Step 7: Click on the 'Download' button, highlighted within the green box, to proceed.",
        "Step 8: For ZIP files, use a file extraction app like ZArchiver or WinZip to extract the contents.",
        "Step 9: The movie will be saved to your device's storage. Enjoy watching!",
      ],
      back: "Back",
    },
    mr: {
      title: "चित्रपट कसे डाउनलोड करायचे",
      pcTitle: "PC किंवा लॅपटॉप वापरकर्त्यांसाठी",
      pcSteps: [
        "Step 1: आमच्या वेबसाइटच्या होम पेजला भेट द्या.",
        "Step 2: तुमच्या इच्छित चित्रपटाचा ब्राउझ करा किंवा शोधा.",
        "Step 3: चित्रपटाच्या बाजूला 'पहा' (Watch) बटणावर क्लिक करा.",
        "Step 4: Google Drive पेजवर पुनर्निर्देशित केले जाईल जिथे तुम्ही पाहू किंवा डाउनलोड करू शकता.",
        "Step 5: हिरव्या बॉक्समध्ये हायलाइट केलेल्या 'डाउनलोड' बटणावर क्लिक करा.",
        "Step 6: डाउनलोड पूर्ण होईपर्यंत प्रतीक्षा करा आणि चित्रपटाचा आनंद घ्या!",
        "Step 7: ZIP फाइल्ससाठी, WinRAR किंवा 7-Zip सारख्या फाइल एक्स्ट्रॅक्शन टूलचा वापर करून सामग्री Extract करा.",
      ],
      smartphoneTitle: "स्मार्टफोन (Android) वापरकर्त्यांसाठी",
      smartphoneSteps: [
        "Step 1: तुमच्या मोबाइल ब्राउझरवर आमच्या वेबसाइटचे होम पेज उघडा.",
        "Step 2: तुमचा आवडता चित्रपट ब्राउझ करा किंवा शोधा.",
        "Step 3: चित्रपटाच्या बाजूला 'पहा'(Watch) बटणावर टॅप करा.",
        "Step 4: प्रक्रियेसह सुरू ठेवण्यासाठी एक ईमेल आयडी निवडा.",
        "Step 5: Google Drive पेजवर पुनर्निर्देशित केले जाईल जिथे तुम्ही पाहू किंवा डाउनलोड करू शकता.",
        "Step 6: हिरव्या बॉक्समध्ये हायलाइट केलेल्या तीन-बिंदूच्या बटणावर क्लिक करा.",
        "Step 7: हिरव्या बॉक्समध्ये हायलाइट केलेल्या 'डाउनलोड' बटणावर क्लिक करा.",
        "Step 8: ZIP फाइल्ससाठी, ZArchiver किंवा WinZip सारख्या फाइल एक्स्ट्रॅक्शन अॅपचा वापर करा.",
        "Step 9: चित्रपट तुमच्या डिव्हाइसच्या स्टोरेजमध्ये सेव्ह केला जाईल. पाहण्याचा आनंद घ्या!",
      ],
      back: "मागे",
    },
    hi: {
      title: "मूवी कैसे डाउनलोड करें",
      pcTitle: "पीसी या लैपटॉप उपयोगकर्ताओं के लिए",
      pcSteps: [
        "Step 1: हमारी वेबसाइट के होम पेज पर जाएं।",
        "Step 2: अपनी पसंदीदा मूवी को ब्राउज़ करें या खोजें।",
        "Step 3: मूवी के बगल में 'देखें' (Watch) बटन पर क्लिक करें।",
        "Step 4: इसे Google Drive पेज पर रीडायरेक्ट कर दिया जाएगा, जहां आप देख सकते हैं या डाउनलोड कर सकते हैं।",
        "Step 5: हरे बॉक्स में हाइलाइट किए गए 'डाउनलोड' बटन पर क्लिक करें।",
        "Step 6: डाउनलोड समाप्त होने तक प्रतीक्षा करें, फिर मूवी का आनंद लें!",
        "Step 7: ZIP फाइल्स के लिए, WinRAR या 7-Zip जैसे फाइल एक्सट्रैक्शन टूल का उपयोग करें।",
      ],
      smartphoneTitle: "स्मार्टफोन (Android) उपयोगकर्ताओं के लिए",
      smartphoneSteps: [
        "Step 1: अपने मोबाइल ब्राउज़र पर हमारी वेबसाइट का होम पेज खोलें।",
        "Step 2: अपनी पसंदीदा मूवी को ब्राउज़ करें या खोजें।",
        "Step 3: मूवी के बगल में 'देखें' (Watch) बटन पर टैप करें।",
        "Step 4: प्रक्रिया के साथ जारी रखने के लिए एक ईमेल आईडी चुनें।",
        "Step 5: इसे Google Drive पेज पर रीडायरेक्ट कर दिया जाएगा, जहां आप देख सकते हैं या डाउनलोड कर सकते हैं।",
        "Step 6: हरे बॉक्स में हाइलाइट किए गए तीन-बिंदु बटन पर क्लिक करें।",
        "Step 7: हरे बॉक्स में हाइलाइट किए गए 'डाउनलोड' बटन पर क्लिक करें।",
        "Step 8: मूवी आपके डिवाइस के स्टोरेज में सेव हो जाएगी। आनंद लें!",
        "Step 8: ZIP फाइल्स के लिए, ZArchiver या WinZip जैसे फाइल एक्सट्रैक्शन ऐप का उपयोग करें।",
        "Step 9: मूवी आपके डिवाइस के स्टोरेज में सेव हो जाएगी। आनंद लें!",
      ],
      back: "वापस",
    },
  };

  const t = translations[language]; // Current language translations

  return (
    <div className="Navigation">
      {/* Language Toggle Buttons */}
      <div className="language-toggle">
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("mr")}>मराठी</button>
        <button onClick={() => setLanguage("hi")}>हिंदी</button>
      </div>

      <h1>{t.title}</h1>

      {/* Instructions for PC/Laptop */}
      <div className="instructionsContainer">
        <div className="instructionsColumn">
          <h3>{t.pcTitle}</h3>
          <ul>
            {t.pcSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
            <img src={HomePage} alt="PC Home Page" />
            <img src={Redirect} alt="PC Redirect Page" />
          </ul>
        </div>

        {/* Instructions for Smartphone */}
        <div className="instructionsColumn">
          <h3>{t.smartphoneTitle}</h3>
          <ul>
            {t.smartphoneSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
            <img
              src={HomePageSmartphone}
              alt="Smartphone Home Page"
              style={{ width: "250px", height: "400px" }}
            />
            <img
              src={RedirectSmartphone}
              alt="Smartphone Redirect Page"
              style={{ width: "250px", height: "400px" }}
            />
            <img
              src={DownloadSmartphone}
              alt="Smartphone Download Guide"
              style={{ width: "250px", height: "400px" }}
            />
          </ul>
        </div>
      </div>

      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="backButtonStyle">
        {t.back}
      </button>
    </div>
  );
};

export default HowToDownload;
