import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-dim/20 pt-8 pb-8 text-center text-dim text-xs uppercase tracking-widest font-bold">
      <p>
        Anápolis, GO •{" "}
        <span className="text-neon">{t("titles.footer_status")}</span>
      </p>
      <p className="mt-2 text-[10px]">© 2025 Emanuel Corrêa</p>
    </footer>
  );
}
