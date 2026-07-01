import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Diplomas from "./components/Diplomas";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.css";
import imgPowerFit from "./assets/powerFit.jpg";
import imgGestorTareas from "./assets/gestorTareas.jpg";
import imgcuackkStore from "./assets/cuackkStore.jpg";
import imgsistContBomb from "./assets/sistContBomb.jpg";
import imgIslaNerga from "./assets/IslaNegra.jpg";
import imgMiuccha from "./assets/Miuccha.jpg";
import imgHFQuimica from "./assets/hfquimica.jpg";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const getProjects = (t) => [
  {
    titulo: t("project_hfquimica_title"),
    desc: t("project_hfquimica_desc"),
    tech: [
      "React JS + Vite",
      "Tailwind CSS",
      "React Router Dom",
      "Framer Motion",
      "React Icons",
    ],
    image: imgHFQuimica,
    git: "https://github.com/JoacoSperatti/HF",
    page: "https://hfquimica.vercel.app/#",
    featured: true,
  },
  {
    titulo: t("project_IslaNegra_title"),
    desc: t("project_IslaNegra_desc"),
    tech: [
      "React JS + Vite",
      "Hostinger",
      "React Router Dom",
      "CSS",
      "React Icons",
    ],
    image: imgIslaNerga, 
    git: "https://github.com/JoacoSperatti/Isla",
    page: "https://islanegraresto.com/",
    featured: true,
  },
  {
    titulo: t("project_miuccha_title"),
    desc: t("project_miuccha_desc"),
    tech: [
      "React JS + Vite",
      "Firestore (Firebase)",
      "React Router Dom",
      "Tailwind CSS",
      "SweetAlert2",
      "Swiper JS",
      "React Icons",
      "Vercel Deployment"
    ],
    image: imgMiuccha, 
    git: "https://github.com/JoacoSperatti/miuccha",
    page: "https://www.miuccha.ar/",
    featured: true,
  },
  {
    titulo: t("project_rifas_title"),
    desc: t("project_rifas_desc"),
    tech: [
      "React JS + Vite",
      "Electron JS",
      "Firestore (Firebase)",
      "Tailwind CSS",
      "Recharts (Data Visualization)",
      "SweetAlert2",
      "React Router Dom",
      "SheetJS (XLSX)",
    ],
    image: imgsistContBomb,
    git: "https://github.com/JoacoSperatti/sistContBomb",
    page: "https://drive.google.com/drive/folders/1FtdHFM-hULwzY2JDPwLXIxPYmwt0KwBT?usp=drive_link",
    featured: true,
  },
  {
    titulo: t("project_cuackk_title"),
    desc: t("project_cuackk_desc"),
    tech: [
      "React JS + Vite",
      "Firestore (Firebase)",
      "Firebase Auth",
      "React Router Dom",
      "Tailwind CSS",
      "React Context API",
      "React Hot Toast",
      "React Icons",
      "LocalStorage API",
    ],
    image: imgcuackkStore,
    git: "https://github.com/JoacoSperatti/cuackkStore",
    page: "https://cuackk-store.vercel.app/",
    featured: true,
  },
  {
    titulo: t("project_powerfit_title"),
    desc: t("project_powerfit_desc"),
    tech: [
      "React JS + Vite",
      "Firestore (Firebase)",
      "React Router Dom",
      "Toastify",
      "SweetAlert2",
      "CSS3",
    ],
    image: imgPowerFit,
    git: "https://github.com/JoacoSperatti/Proyecto-React",
    page: "https://powerfit-suplementos.vercel.app/",
  },
  {
    titulo: t("project_task_title"),
    desc: t("project_task_desc"),
    tech: [
      "JavaScript Vanilla",
      "CSS Modules",
      "Local Storage",
      "Toastify",
      "SweetAlert2",
    ],
    image: imgGestorTareas,
    git: "https://github.com/JoacoSperatti/Proyecto-JavaScript",
    page: "https://proyecto-java-script-peach.vercel.app/",
  },
];

function App() {
  const { t } = useTranslation();
  const proyectos = getProjects(t);
  const [showScroll, setShowScroll] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const featuredProjects = proyectos.filter(p => p.featured);
  const otherProjects = proyectos.filter(p => !p.featured);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
      
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div className="container">
      <div 
        className="spotlight" 
        style={{ 
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(136, 192, 208, 0.1) 0%, transparent 80%)` 
        }}
      ></div>
      <nav className="navbar">
        <span className="logo">viking@arch:~</span>
        <ul className="nav-links">
          <li>
            <a href="#skills">{t("nav_stack")}</a>
          </li>
          <li>
            <a href="#proyectos">{t("nav_projects")}</a>
          </li>
          <li>
            <a href="#diplomas">{t("nav_diplomas")}</a>
          </li>
          <li>
            <a href="#footer">{t("nav_contact")}</a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>

      <main>
        <Hero />

        <div id="skills" className="reveal">
          <Skills />
        </div>

        <section id="proyectos" className="section-proyectos reveal">
          <h2 className="section-title">{t("projects_featured_title")}</h2>
          <div className="grid">
            {featuredProjects.map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
          </div>
          
          <h2 className="section-title" style={{ marginTop: "4rem" }}>{t("projects_others_title")}</h2>
          <div className="grid">
            {otherProjects.map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
          </div>
        </section>

        <div className="reveal">
          <Diplomas />
        </div>
      </main>

      <button 
        className={`backToTop ${showScroll ? "show" : ""}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      <footer id="footer" className="footer reveal">
        <div className="social-links">
          <a
            href="https://github.com/JoacoSperatti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>

          <a
            href="https://instagram.com/jsperatti.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon" />
          </a>

          <a
            href="https://wa.me/1131608396"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="mailto:joaquin.speratti@gmail.com" aria-label="Enviar Mail">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Joaquín Speratti. {t("footer_built")}</p>
      </footer>
    </div>
  );
}

export default App;