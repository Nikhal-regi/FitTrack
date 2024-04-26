import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Import your navbar component
import Home from "./Home"; // Import your home component
import Chart from "./Chart"; // Import your chart component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bar" element={<Chart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
