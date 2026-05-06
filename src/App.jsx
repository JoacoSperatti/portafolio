import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.css";
import imgPowerFit from "./assets/powerFit.jpg";
import imgGestorTareas from "./assets/gestorTareas.jpg";
import imgcuackkStore from "./assets/cuackkStore.jpg";
import imgsistContBomb from "./assets/sistContBomb.jpg";
import imgIslaNerga from "./assets/IslaNegra.jpg";
import imgMiuccha from "./assets/Miuccha.jpg";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const getProjects = (t) => [
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
    page: "https://cuackk-store-git-main-joacospees-projects.vercel.app/",
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

  
  return (
    <div className="container">
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
            <a href="#footer">{t("nav_contact")}</a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>

      <main>
        <Hero />

        <div id="skills">
          <Skills />
        </div>

        <section id="proyectos" className="section-proyectos">
          <h2 className="section-title">{t("projects_title")}</h2>
          <div className="grid">
            {proyectos.map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
          </div>
        </section>
      </main>
      <footer id="footer" className="footer">
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