import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import "./App.css";
import imgPowerFit from "./assets/powerFit.jpg";
import imgGestorTareas from "./assets/gestorTareas.jpg";
import imgcuackkStore from "./assets/cuackkStore.jpg";
import imgsistContBomb from "./assets/sistContBomb.jpg";
import imgMiuccha from "./assets/Miuccha.jpg";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function App() {
  const proyectos = [
    {
  titulo: "Miuccha Handmade Shoes",
  desc: "E-commerce de Calzado de Autor | Tienda online de alta gama para una marca de calzado independiente. Desarrollé una experiencia de usuario minimalista con gestión dinámica de stock por talle y color, galería de imágenes optimizada y un flujo de checkout automatizado hacia WhatsApp para concretar ventas personalizadas.",
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
  page: "https://miuccha.vercel.app/",
},
    {
      titulo: "Sistema de Rifas - BVI",
      desc: "Sistema de Gestión y Auditoría de Rifas | Software a medida diseñado para la gestión integral de campañas de recaudación. La aplicación evolucionó de un registro básico a una plataforma robusta de auditoría financiera, permitiendo el control estricto de miles de números de rifas, seguimiento de pagos y control de tesorería en tiempo real.",
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
      titulo: "CuackkStore",
      desc: "E-commerce de Productos Artesanales | Plataforma de comercio electrónico integral para un emprendimiento de productos tejidos a crochet. El objetivo principal fue digitalizar el proceso de venta, permitiendo una personalización profunda de los productos y automatizando la gestión de inventario y pedidos.",
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
      titulo: "PowerFit [proyecto final de Carrera]",
      desc: "E-commerce de Suplementos Deportivos (proyecto final de carrera desarrollo frontend con React JS) | La aplicación permite a los usuarios navegar por un catálogo de suplementos, filtrar por categorías, ver detalles de productos, gestionar un carrito de compras y finalizar pedidos generando órdenes reales en Firebase Firestore.",
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
      titulo: "Task Manager [proyecto parcial de Carrera]",
      desc: "Task Manager Minimalista (proyecto parcial de carrera desarrollo frontend con React JS) | Aplicación de productividad enfocada en la manipulación eficiente del DOM y persistencia local.",
      tech: [
        "JavaScript Vanilla",
        "CSS Modules",
        "Local Storage",
        "Toastify",
        "SweetAlert2",
      ],
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
        <p>© {new Date().getFullYear()} Joaquín Speratti. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;