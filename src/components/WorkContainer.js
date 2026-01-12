import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Recetukis",
    description: "Página con recetas sacadas de una API",
    githubLink: "https://github.com/micaelasvatzky/recetukis-2025",
    vercelLink: "https://recetukis.vercel.app/",
    tech: ["HTML", "CSS", "Javascript"],
    image:
  },
  {
    title: "App de Clima",
    description: "Aplicación que muestra el clima actual usando API pública.",
    githubLink: "https://github.com/usuario/weather-app",
    vercelLink: "https://weather-app.vercel.app",
    tech: ["React", "API", "Tailwind"],
  },
  {
    title: "ToDo App",
    description: "Aplicación de tareas con autenticación y almacenamiento en la nube.",
    githubLink: "https://github.com/usuario/todo-app",
    vercelLink: "https://todo-app.vercel.app",
    tech: ["React", "Next.js", "Firebase", "Tailwind"],
  },
  // agregá más proyectos acá
];

const WorkContainer = () => {
  return (
    <div className="w-screen min-h-5xl flex flex-col justify-center items-center text-[#2B2B2B] pt-10 px-6 bg-[#EFE6DA]">
      <h1 className="text-5xl text-[#B9471C] font-bold mb-12">
        Work
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default WorkContainer;
