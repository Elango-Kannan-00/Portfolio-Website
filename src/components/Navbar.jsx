import React from "react";

const Navbar = () => {
  const handleNavClick = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="floating-navbar">
      <a
        className="navbar-icon-link"
        href="#home"
        title="Home"
        onClick={(e) => handleNavClick(e, "home")}
      >
        <img src="/icons/home.png" alt="Home" className="navbar-icon-img" />
      </a>
      <a
        className="navbar-icon-link"
        href="#about"
        title="About"
        onClick={(e) => handleNavClick(e, "about")}
      >
        <img
          src="/icons/about.png"
          alt="About"
          className="navbar-icon-img"
        />
      </a>
      <a
        className="navbar-icon-link"
        href="#skills"
        title="Skills"
        onClick={(e) => handleNavClick(e, "skills")}
      >
        <img src="/icons/skills.png" alt="Skills" className="navbar-icon-img" />
      </a>
      <a
        className="navbar-icon-link"
        href="#projects"
        title="Projects"
        onClick={(e) => handleNavClick(e, "projects")}
      >
        <img
          src="/icons/projects.png"
          alt="Projects"
          className="navbar-icon-img"
        />
      </a>
      <a
        className="navbar-icon-link"
        href="#achievements"
        title="Achievements"
        onClick={(e) => handleNavClick(e, "achievements")}
      >
        <img
          src="/icons/achievements.png"
          alt="Achievements"
          className="navbar-icon-img"
        />
      </a>
      <a
        className="navbar-icon-link"
        href="#contact"
        title="Contact"
        onClick={(e) => handleNavClick(e, "contact")}
      >
        <img
          src="/icons/contact.png"
          alt="Contact"
          className="navbar-icon-img"
        />
      </a>
    </nav>
  );
};

export default Navbar;
