// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          class="button is-primary"
          href="/emily-mayeski-resume.pdf"
          target="_blank"
        >
          <span class="icon">
            <i class="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>OpenAPI, YAML, JSON</li>
            <li>Markdown</li>
            <li>Git</li>
            <li>Github Repo</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
