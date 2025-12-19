import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: { root: "/root", work: "/work", contact: "/contact" },
          hero: {
            status: "Available for Hire",
            role: "Full-Stack & AI Engineer.",
            desc: "Software Engineer with a strong foundation in Full Stack and Computer Vision. Uniting performance (React/Node) with intelligence (Python/YOLO).",
            cta: "Contact",
          },
          titles: {
            skills: "Selected Works & XP",
            footer_status: "System Online",
          },
          skills: {
            backend: "Backend & Core",
            frontend: "Frontend",
            ai: "AI & Data Science",
          },
          projects: {
            homefit: {
              desc: "Back-end in Python with AI and Front-end in React Native. Focus on performance and scalable architecture.",
            },
            vision: {
              desc: "Personal laboratory for image processing and data analysis with neural networks.",
            },
            growon: {
              desc: "VPS Administration, Docker Swarm, Traefik, and complex automations with n8n.",
            },
            bitbee: {
              desc: "Modern web application using Next.js, Fastify, and Drizzle ORM.",
            },
          },
        },
      },
      pt: {
        translation: {
          nav: { root: "/inicio", work: "/projetos", contact: "/contato" },
          hero: {
            status: "Disponível para Projetos",
            role: "Engenheiro Full-Stack & IA.",
            desc: "Engenheiro de Software com base sólida em Full Stack e Visão Computacional. Unindo performance (React/Node) com inteligência (Python/YOLO).",
            cta: "Contato",
          },
          titles: {
            skills: "Trabalhos e XP",
            footer_status: "Sistema Online",
          },
          skills: {
            backend: "Backend & Core",
            frontend: "Frontend",
            ai: "IA & Ciência de Dados",
          },
          projects: {
            homefit: {
              desc: "Back-end em Python com IA e Front-end em React Native. Foco em performance e arquitetura escalável.",
            },
            vision: {
              desc: "Laboratório pessoal de processamento de imagem e análise de dados com redes neurais.",
            },
            growon: {
              desc: "Administração de VPS, Docker Swarm, Traefik e automações complexas com n8n.",
            },
            bitbee: {
              desc: "Aplicação web moderna utilizando Next.js, Fastify e Drizzle ORM.",
            },
          },
        },
      },
      es: {
        translation: {
          nav: { root: "/inicio", work: "/proyectos", contact: "/contacto" },
          hero: {
            status: "Disponible para Contratar",
            role: "Ingeniero Full-Stack e IA.",
            desc: "Ingeniero de Software con sólida base en Full Stack y Visión por Computadora. Uniendo rendimiento (React/Node) con inteligencia (Python/YOLO).",
            cta: "Contacto",
          },
          titles: {
            skills: "Trabajos y XP",
            footer_status: "Sistema En Línea",
          },
          skills: {
            backend: "Backend & Core",
            frontend: "Frontend",
            ai: "IA y Ciencia de Datos",
          },
          projects: {
            homefit: {
              desc: "Back-end en Python con IA y Front-end en React Native. Enfoque en rendimiento y arquitectura escalable.",
            },
            vision: {
              desc: "Laboratorio personal de procesamiento de imágenes y análisis de datos con redes neuronales.",
            },
            growon: {
              desc: "Administración de VPS, Docker Swarm, Traefik y automatizaciones complejas con n8n.",
            },
            bitbee: {
              desc: "Aplicación web moderna utilizando Next.js, Fastify y Drizzle ORM.",
            },
          },
        },
      },
    },
  });

export default i18n;
