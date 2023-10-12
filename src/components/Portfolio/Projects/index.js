import React from "react";
import "./styles.css";
import Work from "../Work";
import DownArrows from "../../Animations/DownArrows";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="projects-text">Projects</h2>
      <div className="projects-container">
        <div className="col">
          <Work
            title="Marketing Landing Page"
            imgSrc="marketing-landing-page.png"
            skills={["React, JavaScript, HTML, CSS"]}
            demoLink="https://marketing-campaign-landing-page.netlify.app/"
            codeLink="https://github.com/daramolav1/marketing-landing-page"
          />
          <Work
            title="Employee Directory"
            imgSrc="employee-directory.png"
            skills={["React, JavaScript, HTML, CSS"]}
            demoLink="https://employee-directory-client.netlify.app/"
            codeLink="https://github.com/daramolav1/employee-directory"
          />
        </div>

        <div className="col">
          <Work
            title="To-Do List"
            imgSrc="to-do-list.png"
            skills={["React, JavaScript, HTML, CSS"]}
            demoLink="https://to-do-list-app-client.netlify.app/"
            codeLink="https://github.com/daramolav1/to-do-list"
          />
          <Work
            title="Weather App"
            imgSrc="weather-app.png"
            skills={["React, JavaScript, HTML, CSS"]}
            demoLink="https://weather-forecast-app-client.netlify.app/"
            codeLink="https://github.com/daramolav1/weather-app-v2"
          />
          <Work
            title="Restaurant Reservation App"
            imgSrc="restaurant-reservation-app.png"
            skills={["React, Node.js, Express, Knex, PostgreSQL"]}
            demoLink="https://restaurant-reserv-client.herokuapp.com/dashboard"
            codeLink="https://github.com/daramolav1/restaurant-reservation-app"
          />
          <Work
            title="Calculator"
            imgSrc="calculator.png"
            skills={["React, JavaScript, HTML, CSS"]}
            demoLink="https://calculator-app-client.netlify.app/"
            codeLink="https://github.com/daramolav1/calculator"
          />
          <Work
            title="Tic-Tac-Toe"
            imgSrc="tic-tac-toe.png"
            skills={["React, JavaScript, HTML, CSS"]}
            demoLink="https://tic-tac-toe-game-client.netlify.app/"
            codeLink="https://github.com/daramolav1/tic-tac-toe"
          />
        </div>

        <div className="col">
          <Work
            title="Movie Database App"
            imgSrc="movie-db-app.png"
            skills={["Node.js, Express, Knex, PostgreSQL"]}
            demoLink="https://welovemovies-catalog-frontend.herokuapp.com"
            codeLink="https://github.com/daramolav1/welovemovies-catalog-server"
          />
          <Work
            title="Study Tool/Flash Card App"
            imgSrc="flashcard-app.png"
            skills={["React, JavaScript, HTML, CSS, Bootstrap"]}
            demoLink="https://flashcard-react-app.herokuapp.com"
            codeLink="https://github.com/daramolav1/flashcard-app"
          />
          <Work
            title="Random Quote Generator"
            imgSrc="random-quote-gen.png"
            skills={["React, JavaScript, HTML, Bootstrap"]}
            demoLink="https://random-quote-gen-client.herokuapp.com"
            codeLink="https://github.com/daramolav1/random-quote-generator"
          />
        </div>
      </div>
      <DownArrows />
    </div>
  );
}

export default Projects;
