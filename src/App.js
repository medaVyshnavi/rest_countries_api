import React, { useState } from "react";
import CountryDetail from "./components/Card/CountryDetail";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import "./index.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const styling = isDarkMode ? "dark" : "light";
  return (
    <div className={styling}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      {!selectedCountry ? (
        <Home setSelectedCountry={setSelectedCountry} />
      ) : (
        <CountryDetail
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </div>
  );
}

export default App;
