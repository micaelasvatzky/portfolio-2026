"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/translations";
import Link from "next/link";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full px-6 md:px-20 py-6 border-t border-black/5 dark:border-white/5 bg-white/[0.03] dark:bg-black/[0.03] backdrop-blur-2xl z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
        <span>micaela svatzky - 2026</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/micaelasvatzky"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/micaela-svatzky-402082279/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;