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
    <div className="w-full max-w-sm bg-[#B9471C] rounded-2xl shadow-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl">
      
      <h3 className="text-xl font-bold text-[#EFE6DA] text-center py-2 border-gray-200">
        {title}
      </h3>

      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />

          
          <div className="absolute bottom-0 right-0 flex gap-6 bg-[#B9471C] px-4 py-2 rounded-tl-xl backdrop-blur-sm">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/assets/github.png"
                  alt="GitHub"
                  width={28}
                  height={28}
                />
              </a>
            )}

            {vercelLink && (
              <a
                href={vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/assets/vercel2.png"
                  alt="Vercel"
                  width={28}
                  height={28}
                />
              </a>
            )}
          </div>
        </div>
      )}

      <div className="p-4 flex flex-col grow">
        <p className="text-[#EFE6DA] text-sm mb-3 text-center">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-[#EFE6DA] text-[#B9471C] px-2 py-1 rounded-md text-xs font-semibold"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
