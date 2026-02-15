import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  // Tus proyectos basados en lo que me contaste
  const proyectos = [
    {
      titulo: "Sistema de Gestión de Tutorías",
      desc: "Plataforma Fullstack para administrar alumnos, agendar clases de Matemática/Física y gestionar pagos.",
      tech: ["Node.js", "Express", "PostgreSQL", "React"],
      link: "https://github.com/viking/tutorias-app"
    },
    {
      titulo: "Task Manager Minimalista",
      desc: "Aplicación de productividad enfocada en la manipulación eficiente del DOM y persistencia local.",
      tech: ["JavaScript Vanilla", "CSS Modules", "Local Storage"],
      link: "https://github.com/viking/task-manager"
    },
    {
      titulo: "API Rest E-commerce (WIP)",
      desc: "Backend escalable con autenticación JWT, manejo de roles y documentación automática.",
      tech: ["Python", "FastAPI", "Docker", "Swagger"],
      link: "https://github.com/viking"
    }
  ];

  return (
    <div className="container">
      {/* Navbar: Estilo prompt de terminal */}
      <nav className="navbar">
        <span className="logo">viking@arch:~</span>
        <ul className="nav-links">
          <li><a href="#skills">Stack</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="mailto:tu-email@gmail.com">Contacto</a></li>
        </ul>
      </nav>

      <main>
        {/* Sección 1: Intro */}
        <Hero />

        {/* Sección 2: Tecnologías */}
        <div id="skills">
          <Skills />
        </div>

        {/* Sección 3: Proyectos */}
        <section id="proyectos" className="section-proyectos">
          <h2 className="section-title">Proyectos Destacados</h2>
          <div className="grid">
            {proyectos.map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer simple */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Joaquín Speratti. Built with React on Arch Linux.</p>
      </footer>
    </div>
  );
}

export default App;