//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project></Project>
    </div>
  );
}

export default Portfolio;
