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
      project_miuccha_desc: "E-commerce for high-end handmade shoes. Features minimalist UI, dynamic stock management, optimized gallery, and automated WhatsApp checkout.",
      project_cuackk_desc: "E-commerce SPA for apparel. Features product catalog, detailed views, shopping cart, and Firebase Firestore integration.",
      project_powerfit_desc: "Sports supplements store. Includes category filtering, real-time stock management, and interactive UI.",
      project_rifas_desc: "Custom management and auditing software for fundraising campaigns. Real-time financial tracking and inventory control.",
      project_task_desc: "Minimalist productivity application focused on DOM manipulation and local persistence.",
      view_code: "Code _",
      visit_site: "Live Demo",
      footer_built: "Built with React.",
      skills_title: "Skills",
      skills_frontend: "Frontend & UI",
      skills_backend: "Backend & Languages",
      skills_db: "Database & Tools",
      skills_lang_cat: "Languages",
      lang_es: "Native Spanish 🇦🇷",
      lang_en: "Advanced English 🇬🇧"
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
      project_miuccha_desc: "E-commerce de calzado de autor. Presenta una interfaz minimalista, gestión dinámica de stock, galería optimizada y checkout automatizado por WhatsApp.",
      project_cuackk_desc: "SPA de E-commerce de indumentaria. Posee catálogo de productos, vista de detalles, carrito de compras e integración con Firebase.",
      project_powerfit_desc: "Tienda de suplementos deportivos. Incluye filtrado por categorías, gestión de stock en tiempo real y UI interactiva.",
      project_rifas_desc: "Software a medida para la gestión y auditoría de campañas de recaudación. Seguimiento financiero y control de inventario en tiempo real.",
      project_task_desc: "Aplicación de productividad minimalista enfocada en la manipulación del DOM y persistencia local.",
      view_code: "Ver Código _",
      visit_site: "Visitar Sitio",
      footer_built: "Hecho con React.",
      skills_title: "Skills",
      skills_frontend: "Frontend & UI",
      skills_backend: "Backend & Lenguajes",
      skills_db: "Database & Tools",
      skills_lang_cat: "Idiomas",
      lang_es: "Español Nativo 🇦🇷",
      lang_en: "Inglés Avanzado 🇬🇧"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", 
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;