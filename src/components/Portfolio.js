//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Basic Portfolio",
    languages: "html, css",
    image: "img/work-portfolio.png",
    description:
      "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
  },
  {
    id: 2,
    title: "Basic Portfolio",
    languages: "html, css",
    image: "img/work-portfolio.png",
    description:
      "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
  },
  {
    id: 3,
    title: "Basic Portfolio",
    languages: "html, css",
    image: "img/work-portfolio.png",
    description:
      "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
  },
  {
    id: 4,
    title: "Basic Portfolio",
    languages: "html, css",
    image: "img/work-portfolio.png",
    description:
      "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
  },
  {
    id: 5,
    title: "Basic Portfolio",
    languages: "html, css",
    image: "img/work-portfolio.png",
    description:
      "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
  },
  {
    id: 6,
    title: "Basic Portfolio",
    languages: "html, css",
    image: "img/work-portfolio.png",
    description:
      "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
