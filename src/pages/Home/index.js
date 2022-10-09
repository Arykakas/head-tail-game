import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Home page</h1>
      </header>
      <Link className="links" to="/about">
        <button type="button" className="btn">
          About
        </button>
      </Link>
      <Link className="links" to="/headAndTail">
        <button type="button" className="btn">
          Head And Tail
        </button>
      </Link>
    </div>
  );
};

export default Home;
