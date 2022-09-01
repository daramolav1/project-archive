import React from "react";
import "./styles.css";
import DownArrows from "../../Animations/DownArrows";
import html_logo from "../../../svgs/skills/html-logo.svg";
import css_logo from "../../../svgs/skills/css-logo.svg";
import javascript_logo from "../../../svgs/skills/javascript-logo.svg";
import typescript_logo from "../../../svgs/skills/typescript-logo.svg";
import react_logo from "../../../svgs/skills/react-logo.svg";
import sass_logo from "../../../svgs/skills/sass-logo.svg";
import mongodb_logo from "../../../svgs/skills/mongodb-logo.svg";
import postgresql_logo from "../../../svgs/skills/postgresql-logo.svg";
import postman_logo from "../../../svgs/skills/postman-logo.svg";
import git_logo from "../../../svgs/skills/git-logo.svg";
import figma_logo from "../../../svgs/skills/figma-logo.svg";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2 className="skills-text">Skills</h2>
      <div className="skill-logo-container">
        <img
          src={html_logo}
          alt="logo"
          className="html-logo skill"
          title="HTML"
        />

        <img src={css_logo} alt="logo" className="css-logo skill" title="CSS" />

        <img
          src={javascript_logo}
          alt="logo"
          className="javascript-logo skill"
          title="JavaScript"
        />

        <img
          src={typescript_logo}
          alt="logo"
          className="typescript-logo skill"
          title="TypeScript"
        />

        <img
          src={react_logo}
          alt="logo"
          className="react-logo skill"
          title="React"
        />

        <img
          src={sass_logo}
          alt="logo"
          className="sass-logo skill"
          title="Sass"
        />

        <img
          src={mongodb_logo}
          alt="logo"
          className="mongodb-logo skill"
          title="MongoDB"
        />

        <img
          src={postgresql_logo}
          alt="logo"
          className="postgresql-logo skill"
          title="PostgreSQL"
        />

        <img
          src={postman_logo}
          alt="logo"
          className="postman-logo skill"
          title="Postman"
        />

        <img src={git_logo} alt="logo" className="git-logo skill" title="Git" />

        <img
          src={figma_logo}
          alt="logo"
          className="figma-logo skill"
          title="Figma"
        />
      </div>
      <DownArrows />
    </div>
  );
}

export default Skills;
