//Needs to include Name and pull in Navigation component
import React from 'react';
import Navigation from "./Navigation";

function Header() {
  // const [categories] = useState([
  //   { name: "about" },
  //   { name: "contact" },
  //   { name: "portfolio" },
  //   { name: "resume" },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/EmilyNecciai?tab=repositories"
          >
            <span className="content is-large">Emily Necciai Mayeski</span>
          </a>
        </div>
      </nav>

      <Navigation
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Navigation>
    </div>
  );
}

export default Header;
