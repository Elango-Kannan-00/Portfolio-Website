import Dock from "./Dock";
import { Home, User, Wrench, FolderKanban, Trophy, Mail } from "lucide-react";

const Navbar = () => {
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const items = [
    {
      icon: <Home className="navbar-nav-icon" aria-hidden="true" />,
      label: "Home",
      onClick: () => handleNavClick("home"),
    },
    {
      icon: <User className="navbar-nav-icon" aria-hidden="true" />,
      label: "About",
      onClick: () => handleNavClick("about"),
    },
    {
      icon: <Wrench className="navbar-nav-icon" aria-hidden="true" />,
      label: "Skills",
      onClick: () => handleNavClick("skills"),
    },
    {
      icon: <FolderKanban className="navbar-nav-icon" aria-hidden="true" />,
      label: "Projects",
      onClick: () => handleNavClick("projects"),
    },
    {
      icon: <Trophy className="navbar-nav-icon" aria-hidden="true" />,
      label: "Achievements",
      onClick: () => handleNavClick("achievements"),
    },
    {
      icon: <Mail className="navbar-nav-icon" aria-hidden="true" />,
      label: "Contact",
      onClick: () => handleNavClick("contact"),
    },
  ];

  return (
    <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
  );
};

export default Navbar;
