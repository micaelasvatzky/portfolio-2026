"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "@/translations";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  { key: "devpath", image: "/assets/devpathbn.png", cols: 2 },
  { key: "studio3", image: "/assets/studio3bn.png", cols: 1 },
  { key: "rickAndMorty", image: "/assets/rickymortyjsbn.png", cols: 1 },
  { key: "popcornJS", image: "/assets/popcornjsbn.png", cols: 1 },
  { key: "recetukis", image: "/assets/Recetukisbn.png", cols: 2 },
];

export default function Work() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="relative z-0 pt-24 lg:pt-32 px-6 lg:px-8 pb-24 lg:pb-24 max-w-6xl lg:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Title Section - compact, no background/border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-3 lg:mb-4">{t.work.title}</h1>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">{t.work.projectLabel}</p>
        </motion.div>

        {projects.map((project, i) => {
          const projectData = t.work.projects[project.key];
          return (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
              className={`group flex flex-col h-full p-3 lg:p-4 rounded-2xl lg:rounded-3xl bg-white/[0.04] dark:bg-black/[0.04] backdrop-blur-md border border-black/5 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-white/5 ${project.cols === 2 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="mb-3 lg:mb-4 w-full h-[160px] lg:h-[200px] relative overflow-hidden rounded-xl lg:rounded-2xl">
                <Image
                  src={project.image}
                  alt={projectData.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={projectData.liveUrl} target="_blank" rel="noreferrer" title={t.work.viewProject} className="w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-black text-black dark:text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowUpRight size={18} />
                  </a>
                  <a href={projectData.githubUrl} target="_blank" rel="noreferrer" title={t.work.viewGithub} className="w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-black text-black dark:text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-1 lg:gap-2">
                <div className="flex justify-between items-start">
                  <h2 className="text-base lg:text-lg font-black uppercase tracking-tighter">{projectData.title}</h2>
                  <span className="text-[10px] font-bold opacity-30 mt-0.5">{projectData.year}</span>
                </div>
                <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] opacity-40">{projectData.cat}</p>
                <p className="text-xs lg:text-sm font-medium leading-relaxed opacity-60">{projectData.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
