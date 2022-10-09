import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h1>About page</h1>
      </div>
      <div className="content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <Link className="links" to="/">
        <button type="button" className="btn">
          Home
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

export default About;
