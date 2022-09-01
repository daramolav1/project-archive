import React from "react";
import "./styles.css";
import resume from "../../../images/resume.png";
import pdf from "../../../data/Victor_Daramola_Resume.pdf";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-text">Contact</h2>
      <h3>
        Email:{" "}
        <a href="mailto:victorddaramola@gmail.com">victorddaramola@gmail.com</a>
      </h3>

      <div className="icons">
        <a
          href="https://github.com/daramolav1"
          target="_blank"
          rel="noreferrer"
          className="github"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/daramolav1/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>

        <a href={pdf} target="_blank" rel="noreferrer">
          <img src={resume} alt="resume" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
