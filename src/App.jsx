import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  GraduationCap,
  Trophy,
  Mail,
  Phone,
  Linkedin,
  Github,
  BookOpen,
  Star,
} from "lucide-react";
import { incrementLike, hydrateLikeState } from "./store/portfolioSlice";

const TypingText = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => prev + text[idx]);
        setIdx(idx + 1);
      }, 100);
      return () => clearTimeout(t);
    }
  }, [idx, text]);

  return <span>{displayed}</span>;
};

function App() {
  const [activeAchievementCategory, setActiveAchievementCategory] =
    useState(null);
  const [activeAchievementIndex, setActiveAchievementIndex] = useState(null);
  const [activeAchievementItems, setActiveAchievementItems] = useState(null);
  const dispatch = useDispatch();
  const likeCount = useSelector((state) => state.portfolio.likeCount);
  const hasLiked = useSelector((state) => state.portfolio.hasLiked);

  const projectsData = [
    {
      title: "Article Recommendation",
      description:
        "A content-based recommendation system that analyzes article titles to understand user intent and suggests the top 5 similar articles instantly. Built with Machine Learning and deployed using Flask for real-time interaction.",
      image: "/images/projects/article.jpg",
      demoLink: "#",
      githubLink: "https://github.com/Logic-Loom-00/Article_Recommendation.git",
    },
    {
      title: "Emission-X",
      description:
        "A web application that monitors industrial CO₂ emissions and uses Machine Learning models to analyze emission levels and suggest eco-friendly mitigation strategies.",
      image: "/images/projects/emission x.png",
      demoLink: "#",
      githubLink:
        "https://github.com/CarbonFootprint-Hackathon/CarbonFootprint.git",
    },
    {
      title: "Expense-Tracker",
      description:
        "A simple web application that helps users track their spending and visualize expenses using interactive bar, line, and pie charts.",
      image: "/images/projects/expense tracker.png",
      demoLink: "https://expense-tracker-sandy-iota.vercel.app/",
      githubLink: "https://github.com/Elango-Kannan-00/Expense-Tracker.git",
    },
    {
      title: "SleepSentrix",
      description:
        "An IoT-enabled smart ankle band that uses sensors like accelerometer, gyroscope, GPS, and camera to monitor movement and send real-time alerts to loved ones in case of emergencies.",
      image: "/images/projects/sleepwalking.jpg",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const achievementCategories = [
    {
      title: "Co-Curriculars",
      items: [
        {
          id: "co-11th-rank",
          title: "School Topper (11th Grade) - AY 2022",
          image: "/images/achievements/Co-Curriculars/11th rank.jpeg",
          detail:
            "School Topper – Overall 3rd Rank (11th Grade) - Recognized as School Topper for securing Overall 3rd Rank in Grade 11 through consistent academic excellence.",
        },
        {
          id: "co-12th-rank",
          title: "School Topper (12th Grade) - AY 2023",
          image: "/images/achievements/Co-Curriculars/12th rank.jpeg",
          detail:
            "School Topper – Overall 1st Rank (12th Grade) - Recognized as School Topper for securing Overall 1st Rank in Grade 12 through consistent academic excellence.",
        },
        {
          id: "co-academic-topper",
          title: "Academic Topper - 1st Year",
          image:
            "/images/achievements/Co-Curriculars/Academic Topper 1st YR.jpg",
          detail:
            "Earned the Academic Topper Award in my first year for achieving high academic standards throughout the year by scoring CGPA 9.216/10.",
        },
        {
          id: "co-paper-publication",
          title: "Research Paper Publication - SleepSentrix",
          image: "/images/achievements/Co-Curriculars/EK-Paper_Publishment.jpg",
          detail:
            "Published a research paper in IRJAEH for the project - SleepSentrix: An IoT-Enabled Ankle Wearable for Sleepwalking Detection, focusing on innovative healthcare monitoring solutions.",
        },
        {
          id: "co-achiever-award",
          title: "Achiever Award - Academic Year 2025-2026",
          image: "/images/achievements/Co-Curriculars/Achiever award.png",
          detail:
            "Recognized as an Achiever - 2026 for outstanding academic, leadership, and extracurricular accomplishments, including a Scopus-indexed research publication, district-level competition success, and Anna University zonal sports achievement.",
        },
      ],
    },
    {
      title: "Extra-Curriculars",
      items: [
        {
          id: "extra-awareness-creative",
          title: "Awareness & Creative Initiatives",
          image:
            "/images/achievements/Extra-Curriculars/Awareness and Creative Initiatives/Reels Competition.jpg",
          detail:
            "This subsection highlights awareness-driven and creative initiatives, including mime performances for social causes, digital awareness videos, and public-impact content creation through competition reels.",
        },
        {
          id: "extra-sports-others",
          title: "Sports and Others",
          image:
            "/images/achievements/Extra-Curriculars/Sports and Others/100m-Winner1.jpeg",
          detail:
            "This subsection includes sports and miscellaneous achievements, including participation and recognition connected to district and zonal level activities, along with broader extracurricular contributions.",
        },
      ],
    },
    {
      title: "Leadership",
      items: [
        {
          id: "lead-eldp",
          title:
            "Finalist - Entreprenuership and Leadership Development Program",
          image: "/images/achievements/Leadership/ELDP.jpg",
          detail:
            "Selected as a finalist in Moonshot Inc’s Entrepreneurship and Leadership Development Program; led a team through ideation, strategy development, and final-round presentation.",
        },
        {
          id: "lead-representative",
          title: "Best Class Representative - 2nd Year",
          image: "/images/achievements/Leadership/Representative 2nd YR.jpg",
          detail:
            "Awarded for outstanding leadership in both odd and even semesters, and reappointed for an additional semester based on performance and responsibility.",
        },
        {
          id: "lead-gfg-cm",
          title: "GeeksforGeeks - Campus Mantri",
          image: "/images/achievements/Leadership/gfg cm.png",
          detail:
            "Campus Mantri – GeeksforGeeks (KIOT) I actively promote coding culture, organize technical events, and build a strong developer community on campus. I serve as a bridge between students and the GeeksforGeeks platform, encouraging peer learning, problem-solving, and skill development.",
        },
        {
          id: "code-to-career",
          title: "Technical Speaker – Code to Career Symposium",
          image: "/images/achievements/Leadership/code-to-career.jpeg",
          detail:
            "Delivered a technical talk during our college symposium workshop 'Code to Career' on the topics of Data Science, Data Engineering, Data Analytics, and LinkedIn Profile Management. Guided students on career pathways, required skillsets, and strategies to build a strong professional presence.",
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        {
          id: "cert-industry-4",
          title: "NPTEL Certification - Industry 4.0 (Elite)",
          image: "/images/achievements/Certifications/Industry 4.o.jpg",
          detail:
            "Successfully completed the NPTEL course, gaining foundational knowledge in smart manufacturing, automation, and IIoT technologies.",
        },
        {
          id: "cert-social-networks",
          title: "NPTEL Certification - Social Networks (Elite)",
          image: "/images/achievements/Certifications/Social Networks.jpg",
          detail:
            "Completed NPTEL certification and developed strong understanding of network analysis, graph theory, and real-world social network applications.",
        },
        {
          id: "cert-cloud-computing",
          title: "HCL GUVI Certification - Introduction to Cloud Computing",
          image:
            "/images/achievements/Certifications/Introduction to Cloud Computing.png",
          detail:
            "Completed NPTEL certification and developed strong understanding of network analysis, graph theory, and real-world social network applications.",
        },
        {
          id: "cert-devops",
          title: "HCL GUVI Certification - Fundamentals of DevOps",
          image:
            "/images/achievements/Certifications/Introduction to DevOps.png",
          detail:
            "Completed NPTEL certification and developed strong understanding of network analysis, graph theory, and real-world social network applications.",
        },
      ],
    },
  ];

  const awarenessCreativeSlides = [
    {
      id: "awareness-mime",
      title: "Mime Event for Forest Conservation Awareness",
      image:
        "/images/achievements/Extra-Curriculars/Awareness and Creative Initiatives/mime.jpg",
      detail:
        "Mime Performance - Forest Conservation Awareness (School Level), presented during annual day to promote social awareness.",
    },
    {
      id: "awareness-corono-virus",
      title: "YouTube Video Creation on Corono-Virus Awareness",
      image:
        "/images/achievements/Extra-Curriculars/Awareness and Creative Initiatives/corono-virus.png",
      detail:
        "COVID-19 Awareness Video Initiative - Contributed to the creation of a YouTube awareness video promoting proper handwashing and safety measures during the Coronavirus pandemic.",
    },
    {
      id: "awareness-reels",
      title: "Reels Competition on AIDS Awareness",
      image:
        "/images/achievements/Extra-Curriculars/Awareness and Creative Initiatives/Reels Competition.jpg",
      detail:
        "2nd Place - District-Level Reels Competition (Tamil Nadu AIDS Control Society) for creating an AIDS awareness reel with social impact.",
    },
  ];

  const sportsAndOthersSlides = [
    // 🟡 Zone Level 200m Runner-Up
    {
      id: "sports-zonelevel-200m-runner",
      title: "Athletics - Zone Level 200m : 2nd Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/ZoneLevel-200m-Runner.jpeg",
      detail:
        "Secured 2nd place in the 200m sprint at the Zonal Level Athletics Meet, demonstrating speed, endurance, and competitive performance.",
    },
    // 🥇 100m Sprint Winner (1)
    {
      id: "sports-100m-winner-1",
      title: "Athletics - 100m Sprint : 1st Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/100m-Winner3.jpeg",
      detail:
        "Achieved 1st place in the 100m sprint, showcasing explosive speed, focus, and strong race execution at 6th Grade.",
    },
    // 🥇 100m Sprint Winner (2)
    {
      id: "sports-100m-winner-2",
      title: "Athletics - 100m Sprint : 1st Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/100m-Winner2.jpeg",
      detail:
        "Secured another 1st place finish in the 100m sprint, reflecting consistency and peak sprinting performance at 7th Grade.",
    },
    // 🥇 Shot Put Winner (1)
    {
      id: "sports-shotput-winner-1",
      title: "Athletics - Shotput : 1st Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/Shotput-Winner2.jpeg",
      detail:
        "Won 1st place in Shot Put, demonstrating strength, technique, and precision in field events at 8th Grade.",
    },
    // 🥇 Shot Put Winner (2)
    {
      id: "sports-shotput-winner-2",
      title: "Athletics - Shotput : 1st Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/Shotput-Winner1.jpeg",
      detail:
        "Achieved another 1st place finish in Shot Put, reflecting consistency and strong athletic discipline at 9th Grade.",
    },
    // 🥇 Kabaddi Winner
    {
      id: "sports-kabaddi-winner",
      title: "Kabaddi - 1st Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/Kabaddi-Winner.jpeg",
      detail:
        "Secured 1st place in Kabaddi, highlighting teamwork, agility, and strategic gameplay in a competitive team sport at 8th Grade.",
    },
    // 🥈 100m Sprint Runner-Up
    {
      id: "sports-100m-runner",
      title: "Athletics - 100m Sprint : 2nd Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/100m-Runner.jpeg",
      detail:
        "Earned 2nd place in the 100m sprint, demonstrating competitive spirit and strong sprint performance at 9th Grade.",
    },
    // 🥈 Shot Put Runner-Up
    {
      id: "sports-shotput-runner",
      title: "Athletics - Shotput : 2nd Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/Shotput-Runner.jpeg",
      detail:
        "Achieved 2nd place in Shot Put, reflecting strength, balance, and consistent field event performance at 6th Grade.",
    },
    // 🥈 4x100m Relay Runner-Up
    {
      id: "sports-relay-runner",
      title: "Athletics - 4x100m Relay : 2nd Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/Relay-Runner.jpeg",
      detail:
        "Secured 2nd place in the 4x100m relay, demonstrating coordination, teamwork, and synchronized performance.",
    },
    // 🥈 Football Runner-Up
    {
      id: "sports-football-runner",
      title: "Football - 2nd Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/Football-Runner.jpeg",
      detail:
        "Earned 2nd place in Football, highlighting teamwork, tactical awareness, and competitive team play at 8th Grade.",
    },
    // 🥈 Kabaddi Runner-Up
    {
      id: "sports-kabaddi-runner",
      title: "Kabaddi - 2nd Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/Kabaddi-Runner.jpeg",
      detail:
        "Secured 2nd place in Kabaddi, showcasing agility, defensive strategy, and strong team coordination at 6th Grade.",
    },
    // 🥈 Volleyball Runner-Up
    {
      id: "sports-volleyball-runner",
      title: "Volleyball - 2nd Prize",
      image:
        "/images/achievements/Extra-Curriculars/Sports and Others/Volleyball-runner.jpeg",
      detail:
        "Achieved 2nd place in Volleyball, reflecting teamwork, communication, and competitive sportsmanship at 7th Grade.",
    },
  ];

  const openAchievementCarousel = (categoryTitle, index, items = null) => {
    setActiveAchievementCategory(categoryTitle);
    setActiveAchievementItems(items);
    setActiveAchievementIndex(index);
  };

  const closeAchievementCarousel = () => {
    setActiveAchievementCategory(null);
    setActiveAchievementItems(null);
    setActiveAchievementIndex(null);
  };

  const showPreviousAchievement = () => {
    setActiveAchievementIndex((prev) => {
      const total = (activeAchievementItems ?? activeCategoryItems).length;
      if (total === 0 || prev === null) return 0;
      return (prev - 1 + total) % total;
    });
  };

  const showNextAchievement = () => {
    setActiveAchievementIndex((prev) => {
      const total = (activeAchievementItems ?? activeCategoryItems).length;
      if (total === 0 || prev === null) return 0;
      return (prev + 1) % total;
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `${id}`);
    }
  };

  const handlePortfolioLike = () => {
    dispatch(incrementLike());
  };

  useEffect(() => {
    const raw = localStorage.getItem("ek_portfolio_like_state");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        dispatch(hydrateLikeState(parsed));
      } catch {
        // Ignore malformed localStorage data
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(
      "ek_portfolio_like_state",
      JSON.stringify({ likeCount, hasLiked }),
    );
  }, [likeCount, hasLiked]);

  const activeCategoryItems =
    achievementCategories.find(
      (category) => category.title === activeAchievementCategory,
    )?.items ?? [];
  const currentCarouselItems = activeAchievementItems ?? activeCategoryItems;

  return (
    <div className="App">
      {/* SECTION 1: INTRODUCTION */}
      <section id="home" className="section">
        <h2 style={{ fontSize: "5.1rem" }}>
          Hello World, Welcome you all to <TypingText text="EK's Portfolio" />
          <span className="blinking-exclamation">!</span>
        </h2>
        <div className="profile-canvas">
          <img src="/images/profile/profile.png" alt="Elango Kannan profile" />
        </div>

        <section id="about" className="section">
          <h1 className="section-title about-main-title">
            About Elango Kannan
          </h1>
          <div
            style={{
              maxWidth: "1000px",
              width: "100%",
              lineHeight: "1.7",
              fontSize: "1.25rem",
            }}
          >
            <p style={{ textAlign: "center", marginBottom: "24px" }}>
              I am Elango Kannan 🌟, pursuing B.E. Computer Science Engineering
              at Knowledge Institute of Technology. Passionate about Frontend
              Development and Java Programming, with a strong academic record
              and leadership background. I enjoy building user-friendly
              applications and continuously improving my technical and
              problem-solving skills.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "80px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "320px", textAlign: "left" }}>
                <h3 className="about-subtitle">Academic Information</h3>
                <div
                  className="about-card"
                  style={{
                    width: "100%",
                    maxWidth: "460px",
                    margin: "0 auto",
                    paddingLeft: "30px",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "6px",
                      fontWeight: 600,
                      color: "var(--primary)",
                    }}
                  >
                    KG to 10th Grade
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    <span className="about-label about-label-with-icon">
                      <GraduationCap size={16} />
                      School
                    </span>{" "}
                    - Vivekananda Balamandir Matriculation School, Nainampatty,
                    Salem.
                  </p>
                  <p style={{ margin: "0 0 14px 0" }}>
                    <span className="about-label about-label-with-icon">
                      <Trophy size={16} />
                      Score
                    </span>{" "}
                    - Promoted under the COVID-19 universal pass policy by the
                    Tamil Nadu Government.
                  </p>

                  <p
                    style={{
                      marginBottom: "6px",
                      fontWeight: 600,
                      color: "var(--primary)",
                    }}
                  >
                    11th - 12th Grade
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    <span className="about-label about-label-with-icon">
                      <GraduationCap size={16} />
                      School
                    </span>{" "}
                    - Government Boys Higher Secondary School, Vennandur,
                    Namakkal.
                  </p>
                  <p style={{ margin: "0 0 14px 0" }}>
                    <span className="about-label about-label-with-icon">
                      <Trophy size={16} />
                      Score
                    </span>{" "}
                    - 93.83 %
                  </p>

                  <p
                    style={{
                      marginBottom: "6px",
                      fontWeight: 600,
                      color: "var(--primary)",
                    }}
                  >
                    Bachelor of Engineering - CSE
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    <span className="about-label about-label-with-icon">
                      <GraduationCap size={16} />
                      College
                    </span>{" "}
                    - Knowledge Institute of Technology, Salem.
                  </p>
                  <p style={{ margin: 0 }}>
                    <span className="about-label about-label-with-icon">
                      <Trophy size={16} />
                      Score
                    </span>{" "}
                    - 8.893 / 10
                  </p>
                </div>
              </div>

              <div style={{ flex: 1, minWidth: "320px", textAlign: "left" }}>
                <h3 className="about-subtitle">Academic Progress</h3>
                <div
                  className="about-card"
                  style={{
                    width: "100%",
                    maxWidth: "460px",
                    marginLeft: "auto",
                  }}
                >
                  <ul
                    className="about-progress-list"
                    style={{ marginTop: "8px" }}
                  >
                    {/* <li><Trophy size={16} /> </li> */}
                    <li>
                      <Trophy size={16} /> Ranked 1st in school among all
                      students by securing 93.83% in Grade 12.
                    </li>
                    <li>
                      <Trophy size={16} /> Consistently maintaining a CGPA of
                      8.893/10 across 5 semesters
                    </li>
                    <li>
                      <Trophy size={16} /> Recipient of the Achiever Award 2026
                      - recognized for outstanding contributions to academic,
                      co-curricular, and extra-curricular activities.
                    </li>
                    <li>
                      <Trophy size={16} /> Actively representing Knowledge
                      Institute of Technology as a GeeksforGeeks Campus
                      Ambassador, promoting coding culture and tech awareness.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <button className="ek-btn">Download Resume</button>
          <button
            className="ek-btn"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>
          <button className="ek-btn" onClick={() => scrollToSection("contact")}>
            Contact EK
          </button>
        </div>
      </section>

      {/* SECTION 3: SKILLS */}
      <section id="skills" className="section">
        <h2 className="section-title about-main-title">Skills</h2>
        <div className="skills-layout">
          <div className="skills-group">
            <h3 className="skills-group-title">Frontend Development</h3>
            <div className="skills-items-grid">
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/html.png"
                    alt="HTML"
                  />
                </div>
                <span className="skill-label">HTML</span>
              </div>
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/css.png"
                    alt="CSS"
                  />
                </div>
                <span className="skill-label">CSS</span>
              </div>
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/js.png"
                    alt="JavaScript"
                  />
                </div>
                <span className="skill-label">JS</span>
              </div>
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/react.png"
                    alt="React"
                  />
                </div>
                <span className="skill-label">REACT</span>
              </div>
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/redux.png"
                    alt="Redux"
                  />
                </div>
                <span className="skill-label">REDUX</span>
              </div>
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-group-title">Programming Language</h3>
            <div className="skills-items-grid">
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/java.png"
                    alt="Java"
                  />
                </div>
                <span className="skill-label">Java</span>
              </div>
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/python.png"
                    alt="Python"
                  />
                </div>
                <span className="skill-label">Python</span>
              </div>
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-group-title">DevTools</h3>
            <div className="skills-items-grid">
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/git.png"
                    alt="Git"
                  />
                </div>
                <span className="skill-label">GIT</span>
              </div>
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/github.png"
                    alt="GitHub"
                  />
                </div>
                <span className="skill-label">GITHUB</span>
              </div>
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/vscode.png"
                    alt="VS Code"
                  />
                </div>
                <span className="skill-label">VS CODE</span>
              </div>
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-group-title">Prototype and Design</h3>
            <div className="skills-items-grid">
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/figma.png"
                    alt="Figma"
                  />
                </div>
                <span className="skill-label">Figma</span>
              </div>
              <div className="skill-item">
                <div className="skill-square-card">
                  <img
                    className="skill-icon"
                    src="/images/skills/canva.png"
                    alt="Canva"
                  />
                </div>
                <span className="skill-label">Canva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title about-main-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-image-wrap">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <a
                    className="project-btn project-btn-demo"
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    className="project-btn project-btn-github"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <h2 className="section-title about-main-title">Achievements</h2>
        <div className="achievements-sections">
          {achievementCategories.map((category) => (
            <div key={category.title} className="achievement-category">
              <h3 className="achievement-category-title">{category.title}</h3>
              <div className="achievements-grid">
                {category.items.map((achievement, index) => (
                  <div key={achievement.id} className="achievement-card">
                    <div className="achievement-image-wrap">
                      <img
                        className="achievement-image"
                        src={achievement.image}
                        alt={achievement.title}
                      />
                    </div>
                    <div className="achievement-content">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <button
                        className="project-btn project-btn-demo achievement-about-btn"
                        onClick={() => {
                          if (achievement.id === "extra-awareness-creative") {
                            openAchievementCarousel(
                              category.title,
                              0,
                              awarenessCreativeSlides,
                            );
                            return;
                          }
                          if (achievement.id === "extra-sports-others") {
                            openAchievementCarousel(
                              category.title,
                              0,
                              sportsAndOthersSlides,
                            );
                            return;
                          }
                          openAchievementCarousel(category.title, index);
                        }}
                      >
                        {category.title === "Extra-Curriculars"
                          ? "Know More"
                          : "About"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CONTACT */}
      <section id="contact" className="section">
        <div className="contact-shell">
          <h2 className="contact-title">Contact EK</h2>
          <div className="contact-details">
            <div className="contact-details-row">
              <p>
                <span className="contact-detail-icon" aria-hidden="true">
                  <Mail size={16} />
                </span>
                <span className="contact-detail-label">Email ID</span> -
                elango.kiot@gamil.com
              </p>
              {/* <p>
                <span className="contact-detail-icon" aria-hidden="true">
                  <Phone size={16} />
                </span>
                <span className="contact-detail-label">Contact Number</span> -
                +91 97500 66848
              </p> */}
            </div>
            <div className="contact-details-row">
              <p>
                <span className="contact-detail-icon" aria-hidden="true">
                  <Linkedin size={16} />
                </span>
                <span className="contact-detail-label">LinkedIn</span> -{" "}
                <a
                  className="contact-detail-link"
                  href="https://www.linkedin.com/in/ek0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Elango Kannan
                </a>
              </p>
              <p>
                <span className="contact-detail-icon" aria-hidden="true">
                  <Github size={16} />
                </span>
                <span className="contact-detail-label">Github</span> -{" "}
                <a
                  className="contact-detail-link"
                  href="https://github.com/Elango-Kannan-00"
                  target="_blank"
                  rel="noreferrer"
                >
                  Elango-Kannan-00
                </a>
              </p>
              <p>
                <span className="contact-detail-icon" aria-hidden="true">
                  <BookOpen size={16} />
                </span>
                <span className="contact-detail-label">GeeksforGeeks</span> -{" "}
                <a
                  className="contact-detail-link"
                  href="https://www.geeksforgeeks.org/profile/elangokannan00"
                  target="_blank"
                  rel="noreferrer"
                >
                  elangokannan00
                </a>
              </p>
            </div>
          </div>
          <div className="contact-divider"></div>
          <p className="contact-intro">
            Got a question, proposal, or just want to say hi? Fill out the form
            below and I'll get back to you!
          </p>

          <form
            className="contact-form"
            action="https://formspree.io/f/mojnoqql"
            method="POST"
          >
            <label className="contact-label" htmlFor="contact-name">
              NAME
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className="contact-input"
              placeholder="Your full name"
              required
            />

            <label className="contact-label" htmlFor="contact-email">
              EMAIL ID
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="contact-input"
              placeholder="your@email.com"
              required
            />

            <label className="contact-label" htmlFor="contact-message">
              MESSAGE
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="contact-textarea"
              placeholder="Write your message here..."
              rows="6"
              required
            ></textarea>

            <button className="contact-send-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="portfolio-like-section">
        <p className="portfolio-like-text">Do you like EK&apos;s Portfolio?</p>
        <button
          className="portfolio-like-star-btn"
          onClick={handlePortfolioLike}
          aria-label="Like EK portfolio"
          disabled={hasLiked}
          title={
            hasLiked
              ? "You already liked this portfolio"
              : "Like this portfolio"
          }
        >
          <Star size={22} fill="currentColor" />
        </button>
        <p className="portfolio-like-count">Stars: {likeCount}</p>
      </section>

      <Navbar />

      {/* ACHIEVEMENT CAROUSEL MODAL */}
      {activeAchievementCategory !== null &&
        activeAchievementIndex !== null && (
          <div className="carousel-overlay" onClick={closeAchievementCarousel}>
            <div
              className="carousel-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="carousel-close"
                onClick={closeAchievementCarousel}
              >
                x
              </button>
              <button
                className="carousel-nav carousel-nav-left"
                onClick={showPreviousAchievement}
              >
                ‹
              </button>
              <button
                className="carousel-nav carousel-nav-right"
                onClick={showNextAchievement}
              >
                ›
              </button>
              <div
                key={`${activeAchievementCategory}-${activeAchievementIndex}`}
                className="carousel-content"
              >
                <img
                  className="carousel-image"
                  src={currentCarouselItems[activeAchievementIndex]?.image}
                  alt={currentCarouselItems[activeAchievementIndex]?.title}
                />
                <h3 className="carousel-title">
                  {currentCarouselItems[activeAchievementIndex]?.title}
                </h3>
                <p className="carousel-detail">
                  {currentCarouselItems[activeAchievementIndex]?.detail}
                </p>
              </div>
              <div className="carousel-dots">
                {currentCarouselItems.map((item, index) => (
                  <button
                    key={item.title}
                    className={`carousel-dot ${index === activeAchievementIndex ? "active" : ""}`}
                    onClick={() => setActiveAchievementIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
