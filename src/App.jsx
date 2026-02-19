import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import "./App.css";
import imgPowerFit from "./assets/powerFit.jpg"
import imgGestorTareas from "./assets/gestorTareas.jpg"

function App() {
  const proyectos = [
    {
      titulo: "PowerFit | E-commerce de Suplementos Deportivos",
      desc: "Single Page Application (SPA) de e-commerce desarrollada con React JS. La aplicación permite a los usuarios navegar por un catálogo de suplementos, filtrar por categorías, ver detalles de productos, gestionar un carrito de compras y finalizar pedidos generando órdenes reales en Firebase Firestore.",
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
      page: "https://powerfit-suplementos.vercel.app/"
    },
    {
      titulo: "Task Manager Minimalista",
      desc: "Aplicación de productividad enfocada en la manipulación eficiente del DOM y persistencia local.",
      tech: ["JavaScript Vanilla", "CSS Modules", "Local Storage"],
      link: "https://github.com/JoacoSperatti/Proyecto-JavaScript",
      image: imgGestorTareas,
      git: "https://github.com/JoacoSperatti/Proyecto-JavaScript",
      page: "https://proyecto-java-script-peach.vercel.app/"
    },
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <span className="logo">viking@arch:~</span>
        <ul className="nav-links">
          <li>
            <a href="#skills">Stack</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="mailto:joaquin.speratti@gmail.com">Contacto</a>
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

      <footer className="footer">
        <p>© {new Date().getFullYear()} Joaquín Speratti. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
