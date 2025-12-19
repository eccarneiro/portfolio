import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Database, Code2, ScanEye } from "lucide-react";
import { Card } from "../ui/Card";

export function Skills() {
  const { t } = useTranslation();

  const skills = [
    {
      name: t("skills.backend"),
      icon: <Database className="w-6 h-6 text-neon" />,
      items: ["Node.js", "NestJS", "Fastify", "Python", "SQL"],
    },
    {
      name: t("skills.frontend"),
      icon: <Code2 className="w-6 h-6 text-neon" />,
      items: ["React", "Next.js", "React Native", "TailwindCSS"],
    },
    {
      name: t("skills.ai"),
      icon: <ScanEye className="w-6 h-6 text-neon" />,
      items: ["OpenCV", "YOLO", "TensorFlow", "Pandas", "Docker"],
    },
  ];

  return (
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
                <h3 className="font-bold text-xl text-text">{skill.name}</h3>
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
  );
}
