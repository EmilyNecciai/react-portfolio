// CLICKABLE Navigation Titles to take you to Sections
// About Me (DEFAULT SHOWN)
// Portfolio
// Contact Me
// Resume
// Navigation Title must highlight when you're on the page.

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";

/* <Nav
pages={pages} */
// setCurrentCategory={setCurrentCategory}
// currentCategory={currentCategory}
// contactSelected={contactSelected}
// setContactSelected={setContactSelected}
// ></Nav>

import React from "react";

function Navigation() {
  return (
    <div className="tabs is-centered">
      <ul>
        <li className="is-active">
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>Résumé</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
