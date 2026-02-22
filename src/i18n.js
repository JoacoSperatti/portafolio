import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav_stack: "Stack",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hero_command: "$ whoami",
      hero_subtitle: "Systems Engineering Student & Full Stack Developer",
      hero_description: "Focused on building efficient solutions, specialized in <strong>React, Python, and Linux</strong> environments.",
      hero_cv: "Download CV",
      hero_projects: "View Projects",
      projects_title: "Featured Projects",
      project_powerfit_title: "PowerFit | E-commerce",
      project_powerfit_desc: "E-commerce SPA for sports supplements. Features catalog, filters, shopping cart, and Firebase integration.",
      project_task_title: "Task Manager",
      project_task_desc: "Minimalist productivity app focused on DOM manipulation and local persistence.",
      footer_copy: "Built with React.",
      tech_catalog: "Catalog",
      tech_filters: "Filters",
      tech_persistence: "Local Persistence"
    }
  },
  es: {
    translation: {
      nav_stack: "Stack",
      nav_projects: "Proyectos",
      nav_contact: "Contacto",
      hero_command: "$ quién_soy",
      hero_subtitle: "Estudiante de Ingeniería en Sistemas y Desarrollador Full Stack",
      hero_description: "Enfocado en la creación de soluciones eficientes, especializado en entornos <strong>React, Python y Linux</strong>.",
      hero_cv: "Descargar CV",
      hero_projects: "Ver Proyectos",
      projects_title: "Proyectos Destacados",
      project_powerfit_title: "PowerFit | E-commerce",
      project_powerfit_desc: "E-commerce SPA de suplementos deportivos. Incluye catálogo, filtros, carrito de compras e integración con Firebase.",
      project_task_title: "Gestor de Tareas",
      project_task_desc: "Aplicación de productividad enfocada en la manipulación del DOM y persistencia local.",
      footer_copy: "Hecho con React.",
      tech_catalog: "Catálogo",
      tech_filters: "Filtros",
      tech_persistence: "Persistencia Local"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: { escapeValue: false }
});

export default i18n;