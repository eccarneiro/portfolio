import { Terminal, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 md:gap-0">
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
        {/* MENU NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-dim font-bold">
          <a href="#about" className="hover:text-neon transition-colors">
            /{t("nav.root")}
          </a>
          <a href="#projects" className="hover:text-neon transition-colors">
            /{t("nav.work")}
          </a>
          <a href="#contact" className="hover:text-neon transition-colors">
            /{t("nav.contact")}
          </a>
        </nav>

        <div className="flex items-center gap-3 pl-6 border-l border-dim/20">
          {/* IDIOMAS */}
          <div className="flex text-xs font-bold gap-2 text-dim">
            <button
              onClick={() => changeLanguage("en")}
              className={cn(
                "hover:text-neon transition-colors",
                i18n.language === "en" && "text-neon underline"
              )}
            >
              EN
            </button>
            <span>|</span>
            <button
              onClick={() => changeLanguage("pt")}
              className={cn(
                "hover:text-neon transition-colors",
                i18n.language === "pt" && "text-neon underline"
              )}
            >
              PT
            </button>
            <span>|</span>
            <button
              onClick={() => changeLanguage("es")}
              className={cn(
                "hover:text-neon transition-colors",
                i18n.language === "es" && "text-neon underline"
              )}
            >
              ES
            </button>
          </div>

          {/* TEMA */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-dim/30 hover:border-neon hover:text-neon transition-all bg-surface text-dim ml-2"
            title="Mudar Tema"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
