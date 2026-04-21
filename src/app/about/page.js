"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "@/translations";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="relative z-0 min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 py-24 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center max-w-5xl lg:max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-[3/4] lg:aspect-[4/5] bg-black/5 dark:bg-white/5 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/5 group max-h-[45vh] lg:max-h-[70vh] w-full max-w-[280px] lg:max-w-none mx-auto lg:mx-0"
        >
          <Image
            src="/assets/micabn.jpeg"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
            alt="Micaela"
            fill
            sizes="(max-width: 768px) 80vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <div>
            <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-4 lg:mb-6">
              {t.about.title}
            </h1>
            <p className="text-sm lg:text-base font-medium leading-relaxed opacity-80 max-w-lg">
              {t.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 lg:mb-4 text-orange-500">
                {t.about.devLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.about.techStack.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 lg:mb-4 text-purple-500">
                {t.about.designLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.about.designStack.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 lg:pt-6 border-t border-black/10 dark:border-white/10">
            <Link href="/contact" className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:text-orange-500 transition-colors">
              {t.about.contactLabel}{" "}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}