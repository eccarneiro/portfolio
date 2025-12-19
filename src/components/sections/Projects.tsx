import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { Card } from "../ui/Card";

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "HomeFit (Mobile & AI)",
      role: "Full Stack (Remote)",
      desc: t("projects.homefit.desc"),
      tags: ["React Native", "Python", "AI", "SQLAlchemy"],
      link: "#",
    },
    {
      title: "Computer Vision & Data",
      role: "AI Engineer",
      desc: t("projects.vision.desc"),
      tags: ["OpenCV", "YOLO", "TensorFlow", "Pandas"],
      link: "#",
    },
    {
      title: "Growon Infra",
      role: "DevOps & Low-Code",
      desc: t("projects.growon.desc"),
      tags: ["Docker", "Linux", "Traefik", "n8n"],
      link: "#",
    },
    {
      title: "BitBee Web App",
      role: "Full Stack Developer",
      desc: t("projects.bitbee.desc"),
      tags: ["Next.js", "Fastify", "PostgreSQL", "Tailwind"],
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-text">
        <span className="text-neon">02.</span> {t("titles.skills")}
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
  );
}
