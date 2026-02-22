import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import "./App.css";
import imgPowerFit from "./assets/powerFit.jpg";
import imgGestorTareas from "./assets/gestorTareas.jpg";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function App() {
  const proyectos = [
    {
      titulo: "PowerFit",
      desc: "E-commerce de Suplementos Deportivos | La aplicación permite a los usuarios navegar por un catálogo de suplementos, filtrar por categorías, ver detalles de productos, gestionar un carrito de compras y finalizar pedidos generando órdenes reales en Firebase Firestore.",
      tech: [
        "React JS",
        "Vite",
        "Firestore",
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
      titulo: "Task Manager Minimalista",
      desc: "Aplicación de productividad enfocada en la manipulación eficiente del DOM y persistencia local.",
      tech: ["JavaScript Vanilla", "CSS Modules", "Local Storage"],
      link: "https://github.com/JoacoSperatti/Proyecto-JavaScript",
      image: imgGestorTareas,
      git: "https://github.com/JoacoSperatti/Proyecto-JavaScript",
      page: "https://proyecto-java-script-peach.vercel.app/",
    },
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <span className="logo">viking@arch:~</span>
        <ul className="nav-links">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#footer">Contacto</a>
          </li>
        </ul>
      </nav>

      <main>
        <Hero />

        <div id="skills">
          <Skills />
        </div>

        <section id="proyectos" className="section-proyectos">
          <h2 className="section-title">Proyectos Destacados</h2>
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
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>

          <a
            href="https://instagram.com/joacospee"
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
        <p>© {new Date().getFullYear()} Joaquín Speratti. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;