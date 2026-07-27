import { useEffect, useState } from "react";
import Dock from "./Dock";
import { Home, User, Wrench, FolderKanban, Trophy, Mail } from "lucide-react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

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
    <Dock
      items={items}
      panelHeight={isMobile ? 54 : 78}
      baseItemSize={isMobile ? 36 : 58}
      magnification={isMobile ? 44 : 82}
      dockHeight={isMobile ? 160 : 256}
      distance={isMobile ? 120 : 200}
    />
  );
};

export default Navbar;
