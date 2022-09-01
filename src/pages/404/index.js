import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function NoMatch() {
  return (
    <div className="main">
      <div className="card">
        <div>
          <h1 className="card-text">Page Not Found</h1>
        </div>
        <div className="card-subtext">
          <p>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <p>
            <Link to="/">&laquo; Back to our site</Link>
          </p>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
