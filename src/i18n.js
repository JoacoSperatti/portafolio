import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav_stack: "Stack",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hero_command: "$ whoami",
      hero_subtitle: "Systems Engineering Student | Front-End Dev.",
      hero_desc: "Passionate about <strong>React</strong> efficiency for web development to solve complex problems through logic. Currently focused on building practical and aesthetic websites.",
      hero_cv: "Download CV",
      hero_view_projects: "View Projects",
      projects_title: "Featured Projects",
      project_cuackk_desc: "E-commerce SPA for apparel. Features product catalog, detailed views, shopping cart, and Firebase Firestore integration.",
      project_powerfit_desc: "Sports supplements store. Includes category filtering, real-time stock management, and interactive UI.",
      project_bomberos_desc: "Internal management system for fire departments to track fire extinguisher data and maintenance.",
      project_task_desc: "Minimalist productivity application focused on DOM manipulation and local persistence.",
      view_code: "Code _",
      visit_site: "Live Demo",
      footer_built: "Built with React."
    }
  },
  es: {
    translation: {
      nav_stack: "Stack",
      nav_projects: "Proyectos",
      nav_contact: "Contacto",
      hero_command: "$ whoami",
      hero_subtitle: "Estudiante de Ingeniería en Sistemas | Front-End Dev.",
      hero_desc: "Apasionado por la eficiencia de <strong>React</strong> para el desarrollo web con la finalidad de lograr la resolución de problemas complejos a través de la lógica. Actualmente enfocado en construir sitios web prácticos y estéticos.",
      hero_cv: "Descargar CV",
      hero_view_projects: "Ver Proyectos",
      projects_title: "Proyectos Destacados",
      project_cuackk_desc: "SPA de E-commerce de indumentaria. Posee catálogo de productos, vista de detalles, carrito de compras e integración con Firebase.",
      project_powerfit_desc: "Tienda de suplementos deportivos. Incluye filtrado por categorías, gestión de stock en tiempo real y UI interactiva.",
      project_bomberos_desc: "Sistema de gestión interna para cuarteles de bomberos, enfocado en el control de extintores y mantenimientos.",
      project_task_desc: "Aplicación de productividad minimalista enfocada en la manipulación del DOM y persistencia local.",
      view_code: "Ver Código _",
      visit_site: "Visitar Sitio",
      footer_built: "Hecho con React."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma inicial
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;