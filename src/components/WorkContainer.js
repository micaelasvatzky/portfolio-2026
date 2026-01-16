import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Recetukis",
    description: "Plataforma web de recetas que consume datos desde una API externa, permitiendo explorar distintas opciones gastronómicas de forma dinámica.",
    githubLink: "https://github.com/micaelasvatzky/recetukis-2025",
    vercelLink: "https://recetukis.vercel.app/",
    tech: ["HTML", "CSS", "Javascript", "Next"],
    image: "/assets/Recetukisbn.png"
  },
  {
    title: "Popcorn.js",
    description: "Aplicación web de películas que obtiene información desde una API externa, ofreciendo un catálogo interactivo con detalles actualizados de cada film.",
    githubLink: "https://github.com/micaelasvatzky/popcorn.js",
    vercelLink: "https://popcornjs.vercel.app/",
    tech: ["React", "Next.js", "Tailwind"],
    image: "/assets/popcornjsbn.png"
  },
  {
    title: "Rick and Morty App",
    description: "Aplicación web basada en la serie Rick and Morty, que consume una API pública para mostrar personajes, episodios y sus características de forma dinámica.",
    githubLink: "https://github.com/micaelasvatzky/rickandmortyapp",
    vercelLink: "https://rickandmortyapp2025.vercel.app/",
    tech: ["React", "Next.js", "Tailwind"],
    image: "/assets/rickymortyjsbn.png"
  },
  {
    title: "Studio 3 Page",
    description: "E-commerce para un estudio de diseño, enfocado en la venta de mockups y plantillas digitales. Consume datos de una API propia.",
    githubLink: "https://github.com/renatamandelman/prog3-tp4-ecommerce",
    vercelLink: "https://prog3-tp4-ecommerce.vercel.app",
    tech: ["React", "Next.js", "Tailwind", "Node.js", "MongoDB"],
    image: "/assets/studio3bn.png"
  },
  {
    title: "DevPath",
    description: "Plataforma educativa orientada a la enseñanza de programación, con contenidos estructurados y una arquitectura pensada para crecer y escalar.",
    githubLink: "https://github.com/micaelasvatzky/devpath-frontend",
    vercelLink: "https://devpath-2025.vercel.app/",
    tech: ["React", "Next.js", "Tailwind", "Node.js", "MongoDB"],
    image: "/assets/devpathbn.png"
  },
];


const WorkContainer = () => {
  return (
    <div className="w-screen min-h-5xl flex flex-col justify-center items-center py-10 px-6 ">
      <h1 className="text-5xl text-[#B9471C] font-bold mb-12">
        Trabajos
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
