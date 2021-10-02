// titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

import React from "react";

function Project(props) {
  return (
    <div>
      <div className="columns is-desktop">
        {props.projects.map((project) => (
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={project.live} target="_blank">
                    <img src={project.image} alt="Placeholder image" />
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="content">
                  {project.description}
                  <br />
                  <div className="content">{project.languages}</div>
                  <a href={project.repo} target="_blank">
                    See the Repo!
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
