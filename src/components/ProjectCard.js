import Image from "next/image";

const ProjectCard = ({
  image,
  title,
  description,
  githubLink,
  vercelLink,
  tech = [],
}) => {
  return (
    <div className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      
      {/* Imagen */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-5 text-center text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-3">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-[#EFE6DA] text-[#B9471C] px-2 py-1 rounded-md text-xs font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B9471C] text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-[#A03B13] transition-colors"
            >
              GitHub
            </a>
          )}
          {vercelLink && (
            <a
              href={vercelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B9471C] text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-[#A03B13] transition-colors"
            >
              Vercel
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
