import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  const searchData = [
    // Example data structure for testing
    {
      title: "Album 1",
      slug: "album-1",
      songs: [{ artists: ["Artist 1", "Artist 2"] }],
    },
    {
      title: "Album 2",
      slug: "album-2",
      songs: [{ artists: ["Artist 3"] }],
    },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar searchData={searchData} />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
