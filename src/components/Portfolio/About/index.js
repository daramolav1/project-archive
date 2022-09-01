import React from "react";
import "./styles.css";
import CoverLetterVideo from "../../CoverLetterVideo";
import DownArrows from "../../Animations/DownArrows";

function About() {
  return (
    <div className="about" id="about">
      <h2 className="about-text">About</h2>
      <div className="video">{<CoverLetterVideo />}</div>
      <DownArrows />
    </div>
  );
}

export default About;
