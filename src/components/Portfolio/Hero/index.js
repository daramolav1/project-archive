import React from "react";
import "./styles.css";
import DownArrows from "../../Animations/DownArrows";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        <span className="cyan">{"<"}</span>
        Victor Daramola
        <span className="cyan">{"/>"}</span>
      </h1>
      <h5 className="hero-subtext">Developer - Learner - Human</h5>
      <DownArrows />
    </div>
  );
}

export default Hero;
