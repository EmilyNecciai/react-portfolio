// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Technical Writer and Something-of-a Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        I'm Emily, a technical writer studying the full stack to better my work
        as a technical writer in the tech and SaaS fields.
      </p>
      <p className="content">
        I always act as a product manager for learning resources, which guides
        users to what they need in the moment, but also enable them to explore
        content on their terms using video, audio, documentation, and so much
        more in an advanced learning ecosystem.
      </p>
    </div>
  );
}

export default About;
