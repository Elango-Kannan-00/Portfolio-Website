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
    <nav
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#a3c1ad",
        padding: "16px 34px",
        borderRadius: "10px", // 4px-5px as requested
        display: "flex",
        gap: "38px",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
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
