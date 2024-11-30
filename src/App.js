import "./App.css";
import SearchBar from "./components/SearchBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowToDownload from "./pages/HowToDownload";
import RequestMovie from "./pages/RequestMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/how-to-download" element={<HowToDownload />} />
        <Route path="/request-movie" element={<RequestMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
