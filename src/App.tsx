import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  ExternalLink,
  Code2,
  Database,
  ScanEye,
  Sun,
  Moon,
} from "lucide-react";
import { cn } from "./lib/utils";

const projects = [
  {
    title: "HomeFit (Mobile & AI)",
    role: "Full Stack (Remoto/Austrália)",
    desc: "Back-end em Python com IA e Front-end em React Native. Foco em performance e arquitetura escalável.",
    tags: ["React Native", "Python", "AI", "SQLAlchemy"],
    link: "#",
  },
  {
    title: "Computer Vision & Data",
    role: "AI Engineer",
    desc: "Laboratório pessoal de processamento de imagem e análise de dados com redes neurais.",
    tags: ["OpenCV", "YOLO", "TensorFlow", "Pandas"],
    link: "#",
  },
  {
    title: "Growon Infra",
    role: "DevOps & Low-Code",
    desc: "Administração de VPS, Docker Swarm, Traefik e automações complexas com n8n.",
    tags: ["Docker", "Linux", "Traefik", "n8n"],
    link: "#",
  },
  {
    title: "BitBee Web App",
    role: "Full Stack Developer",
    desc: "Aplicação web moderna utilizando Next.js, Fastify e Drizzle ORM.",
    tags: ["Next.js", "Fastify", "PostgreSQL", "Tailwind"],
    link: "#",
  },
];

const skills = [
  {
    name: "Backend & Core",
    icon: <Database className="w-6 h-6 text-neon" />,
    items: ["Node.js", "NestJS", "Fastify", "Python", "SQL"],
  },
  {
    name: "Frontend",
    icon: <Code2 className="w-6 h-6 text-neon" />,
    items: ["React", "Next.js", "React Native", "TailwindCSS"],
  },
  {
    name: "AI & Data Science",
    icon: <ScanEye className="w-6 h-6 text-neon" />,
    items: ["OpenCV", "YOLO", "TensorFlow", "Pandas", "Docker"],
  },
];

// --- COMPONENTES ---
const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-surface border border-dim/20 p-6 rounded-lg transition-all duration-300 hover:border-neon/50 hover:shadow-[0_0_15px_rgba(var(--neon),0.1)] group",
      className
    )}
  >
    {children}
  </div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen px-6 py-12 md:px-20 max-w-7xl mx-auto selection:bg-neon selection:text-white">
      <header className="flex justify-between items-center mb-24">
        <div className="flex items-center gap-2 text-neon cursor-pointer group">
          <Terminal
            size={20}
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="font-bold text-lg tracking-tighter text-text">
            emanuel@dev:~$
          </span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm text-dim font-bold">
            <a href="#about" className="hover:text-neon transition-colors">
              /root
            </a>
            <a href="#projects" className="hover:text-neon transition-colors">
              /work
            </a>
            <a href="#contact" className="hover:text-neon transition-colors">
              /contact
            </a>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-dim/30 hover:border-neon hover:text-neon transition-all bg-surface text-dim"
            title="Mudar Tema"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main className="space-y-32">
        <section id="about" className="relative pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 bg-neon rounded-full animate-pulse"></span>
              <p className="text-neon font-bold tracking-widest text-xs uppercase">
                Available for Hire
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-text">
              Emanuel Corrêa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-emerald-600">
                Full-Stack & AI Engineer.
              </span>
            </h1>
            <p className="text-dim text-lg max-w-xl leading-relaxed mb-8 border-l-2 border-neon/50 pl-4">
              Engenheiro de Software com forte base em Full Stack e Visão
              Computacional. Unindo performance (React/Node) com inteligência
              (Python/YOLO).
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/eccarneiro"
                target="_blank"
                className="p-3 border border-dim/30 rounded bg-surface hover:border-neon hover:text-neon transition-all text-text"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/emanuelcorreacarneiro/"
                target="_blank"
                className="p-3 border border-dim/30 rounded bg-surface hover:border-neon hover:text-neon transition-all text-text"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:emanuelcorreacarneiro@gmail.com"
                className="px-6 py-3 bg-neon text-white font-bold rounded hover:bg-neon/80 transition-colors flex items-center gap-2 shadow-lg shadow-neon/20"
              >
                <Mail size={18} /> Entrar em contato
              </a>
            </div>
          </motion.div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-4 border-b border-dim/20 pb-2">
                    {skill.icon}
                    <h3 className="font-bold text-xl text-text">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono text-neon bg-neon/10 px-2 py-1 rounded border border-neon/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-text">
            <span className="text-neon">02.</span> Selected Works & XP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-neon/80 mb-2 text-[10px] uppercase tracking-widest border border-neon/20 px-2 py-1 rounded inline-block">
                        {project.role}
                      </div>
                      <ExternalLink className="w-5 h-5 text-dim group-hover:text-neon transition-colors" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-text group-hover:text-neon transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dim text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-dim/20">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-dim group-hover:text-neon/70 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="border-t border-dim/20 pt-8 pb-8 text-center text-dim text-xs uppercase tracking-widest font-bold">
          <p>
            Anápolis, GO • <span className="text-neon">System Online</span>
          </p>
          <p className="mt-2 text-[10px]">© 2025 Emanuel Corrêa</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
