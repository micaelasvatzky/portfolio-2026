"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "@/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="relative z-0 min-h-screen flex items-center justify-center px-6 md:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 w-full max-w-7xl items-start lg:items-end">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h1 className="saskia-name whitespace-nowrap">{t.home.nameFirst}</h1>
          <h2 className="saskia-name opacity-60 leading-none whitespace-nowrap">
            {t.home.nameLast}
          </h2>
        </motion.div>

        {/* Role & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-lg"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4 lg:mb-6 leading-tight lg:leading-none">
            {t.home.role}
          </h3>
          <p className="text-base md:text-lg font-medium opacity-50">
            {t.home.shortPhrase}
          </p>
        </motion.div>
      </div>
    </main>
  );
}