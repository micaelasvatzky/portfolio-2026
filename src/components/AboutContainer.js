import React from "react";
import Image from "next/image";

const AboutContainer = () => {
  return (
    <div
      className="
        w-full
        min-h-4xl
        flex flex-col
        items-center
        text-[#2B2B2B]
        py-66
        px-4
        md:px-0
        md:w-screen
        md:h-lg
        md:pt-6
      "
    >
      
      <h1
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          text-[#B9471C]
          font-bold
          mb-10
          md:mb-12
        "
      >
        Sobre Mí
      </h1>

      
      <div
        className="
          flex flex-col
          items-center
          gap-10
          w-full
          md:flex-row
          md:gap-16
          md:items-start
          md:w-screen
          md:justify-center
        "
      >
        
        <div className="shrink-0">
          <Image
            src="/assets/micabn.jpeg"
            alt="Mica"
            width={300}
            height={400}
            className="
              object-cover
              rounded-2xl
              w-48
              h-auto
              sm:w-56
              md:w-75
            "
          />
        </div>

        
        <div
          className="
            max-w-xl
            md:max-w-2xl
            text-center
            md:text-left
          "
        >
          <p className="leading-relaxed text-sm sm:text-base">
            Soy estudiante de la Licenciatura en Tecnología Multimedial y
            desarrolladora front-end en formación. Me interesa crear
            experiencias digitales claras, funcionales y con una mirada estética
            cuidada, donde el diseño y la tecnología dialoguen de forma natural.
            Disfruto aprender haciendo, enfrentar nuevos desafíos y mejorar
            continuamente a partir de la práctica. Busco seguir creciendo
            profesionalmente a través de proyectos que me permitan combinar
            creatividad, pensamiento computacional y una atención especial a los
            detalles.
          </p>

          
          <h4
            className="
              mt-8
              md:mt-10
              text-xl
              md:text-2xl
              text-[#B9471C]
              font-bold
            "
          >
            Habilidades
          </h4>

          <div
            className="
              grid
              grid-cols-4
              sm:grid-cols-6
              gap-4
              my-10
              justify-items-center
              md:justify-items-start
              md:my-6
            "
          >
            {[
              "/assets/html5-2.svg",
              "/assets/css2.png",
              "/assets/js.png",
              "/assets/React.png",
              "/assets/next-js.png",
              "/assets/node2.png",
              "/assets/illustrator.png",
              "/assets/photoshop.png",
              "/assets/after.png",
              "/assets/premiere.png",
              "/assets/figma.png",
            ].map((src, index) => (
              <div
                key={index}
                className="w-12 h-12 flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt="skill"
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
