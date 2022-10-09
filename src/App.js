import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import HAndT from "./pages/HeadAndTail";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/headAndTail" element={<HAndT />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
