import React from "react";
import { Home, User, Cpu, Briefcase, Award, MessageCircle } from "lucide-react";

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
      {/* These hrefs link to the id="home", id="about", etc. in App.jsx */}
      <a
        className="navbar-icon-link"
        href="#home"
        title="Home"
        onClick={(e) => handleNavClick(e, "home")}
      >
        <Home size={36} />
      </a>
      <a
        className="navbar-icon-link"
        href="#about"
        title="About"
        onClick={(e) => handleNavClick(e, "about")}
      >
        <User size={36} />
      </a>
      <a
        className="navbar-icon-link"
        href="#skills"
        title="Skills"
        onClick={(e) => handleNavClick(e, "skills")}
      >
        <Cpu size={36} />
      </a>
      <a
        className="navbar-icon-link"
        href="#projects"
        title="Projects"
        onClick={(e) => handleNavClick(e, "projects")}
      >
        <Briefcase size={36} />
      </a>
      <a
        className="navbar-icon-link"
        href="#achievements"
        title="Achievements"
        onClick={(e) => handleNavClick(e, "achievements")}
      >
        <Award size={36} />
      </a>
      <a
        className="navbar-icon-link"
        href="#contact"
        title="Contact"
        onClick={(e) => handleNavClick(e, "contact")}
      >
        <MessageCircle size={36} />
      </a>
    </nav>
  );
};

export default Navbar;
