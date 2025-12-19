import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2 w-2 bg-neon rounded-full animate-pulse"></span>
          <p className="text-neon font-bold tracking-widest text-xs uppercase">
            {t("hero.status")}
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-text">
          Emanuel Corrêa <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-emerald-600">
            {t("hero.role")}
          </span>
        </h1>
        <p className="text-dim text-lg max-w-xl leading-relaxed mb-8 border-l-2 border-neon/50 pl-4">
          {t("hero.desc")}
        </p>

        <div className="flex items-center gap-4 justify-center md:justify-start w-full">
          <a
            href="https://github.com/eccarneiro"
            target="_blank"
            className="p-3 border border-dim/30 rounded-xl bg-surface hover:border-neon hover:text-neon transition-all text-text flex items-center justify-center"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/emanuelcorreacarneiro/"
            target="_blank"
            className="p-3 border border-dim/30 rounded-xl bg-surface hover:border-neon hover:text-neon transition-all text-text flex items-center justify-center"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:emanuelcorreacarneiro@gmail.com"
            className="min-w-[180px] px-6 py-3 bg-neon text-black font-bold rounded-xl hover:bg-neon/80 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-neon/20"
          >
            <Mail size={20} />
            <span>{t("hero.cta")}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
