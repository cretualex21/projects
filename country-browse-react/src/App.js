import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import SearchForm from "./components/SearchForm";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import SingleCountry from "./components/SingleCountry";
import ErrorPage from "./components/ErrorPage";
import { useGlobalContext } from "./context";

function App() {
  const { loading } = useGlobalContext();
  const [darkMode, setDarkMode] = useState(false);
  const setMode = () => {
    if (darkMode && !loading) {
      document.querySelector("body").classList.add("darkmode");
    } else if (!darkMode && !loading) {
      document.querySelector("body").classList.remove("darkmode");
    }
  };
  useEffect(() => {
    setMode();
  }, [darkMode]);

  return (
    <div>
      <BrowserRouter>
        <nav>
          <p className="bold">Where in the world?</p>
          <div className="right" onClick={() => setDarkMode(!darkMode)}>
            <span>
              {darkMode ? (
                <i class="fa-solid fa-moon"></i>
              ) : (
                <i class="fa-regular fa-moon"></i>
              )}
            </span>
            <p className="semi-bold">Dark Mode</p>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="/country/:name"
            element={<SingleCountry darkMode={darkMode} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
