import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import './App.css';

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
      link: "https://github.com/JoacoSperatti/Proyecto-React",
    },
    {
      titulo: "Task Manager Minimalista",
      desc: "Aplicación de productividad enfocada en la manipulación eficiente del DOM y persistencia local.",
      tech: ["JavaScript Vanilla", "CSS Modules", "Local Storage"],
      link: "https://github.com/JoacoSperatti/Proyecto-JavaScript"
    },
    {
      titulo: "API Rest E-commerce (WIP)",
      desc: "Backend escalable con autenticación JWT, manejo de roles y documentación automática.",
      tech: ["Python", "FastAPI", "Docker", "Swagger"],
      link: "https://github.com/JoacoSperatti/Proyecto"
    }
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <span className="logo">viking@arch:~</span>
        <ul className="nav-links">
          <li><a href="#skills">Stack</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="mailto:tu-email@gmail.com">Contacto</a></li>
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
        <p>© {new Date().getFullYear()} Joaquín Speratti. Built with React on Arch Linux.</p>
      </footer>
    </div>
  );
}

export default App;