import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const headAndTailValues = ["Select Text"];

const HAndT = () => {
  const [headValue, setHeadValue] = useState("Select Text");
  const [errorText, setErrorText] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (headValue === "Select Text") {
      setErrorText("Please select value from dropdown");
      return;
    } else setErrorText("");
    if (headAndTailValues.length === 1) headAndTailValues.push(headValue);
    else {
      headAndTailValues[0] = headAndTailValues[1];
      headAndTailValues[1] = headValue;
    }
    const contentElement = document.querySelector(".grandparent-element");
    const childElement = document.createElement("div");
    childElement.className = "basic";
    childElement.innerHTML = headValue;
    console.log(headAndTailValues);
    if (headAndTailValues[0] !== headAndTailValues[1]) {
      const parentElement = document.createElement("div");
      contentElement.appendChild(parentElement);
      parentElement.appendChild(childElement);
    } else {
      const lastElement = contentElement.lastChild;
      lastElement.appendChild(childElement);
    }
    setHeadValue("Select Text");
  };
  const change = (e) => setHeadValue(e.target.value);

  return (
    <div className="hat-container">
      <div>
        <h1>Head And Tail Game</h1>
      </div>
      <div className="head-tail-content">
        <form onSubmit={submit}>
          <select name="headAndTail" value={headValue} onInput={change}>
            <option value={null}>Select Text</option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>

          <button className="btn purple-btn">Submit</button>
        </form>
        <p className={`${errorText ? "visible" : "hidden"} error`}>
          {errorText}
        </p>
        <div className="result">
          <div className="grandparent-element"></div>
        </div>
        <div>
          <Link className="links" to="/">
            <button type="button" className="btn">
              Home
            </button>
          </Link>
          <Link className="links" to="/about">
            <button type="button" className="btn">
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HAndT;
