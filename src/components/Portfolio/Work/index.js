import React from "react";
import "./styles.css";

function Work({ title, imgSrc, skills, demoLink, codeLink }) {
  return (
    <div className="work">
      <img
        src={require("../../../images/work/" + imgSrc)}
        alt="Portfolio Site"
      />
      <div className="overlay">
        <h4 className="overlay-text">{title}</h4>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div className="btns">
          <a href={demoLink} target="_blank" rel="noreferrer">
            See the site
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            See the code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
