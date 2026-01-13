import React from 'react'
import Image from 'next/image'

const AboutContainer = () => {
  return (
    
    <div className="w-screen min-h-5xl flex flex-col justify-center items-center text-[#2B2B2B] pt-10">
      <h1 className="text-5xl text-[#B9471C] font-bold mb-12">
        About Me
      </h1>
      
      <div className="flex gap-16 items-start w-screen justify-center">
        
        <div className="shrink-0">
          <Image
            src="/assets/micabn.jpeg"
            alt="Mica"
            width={300}
            height={400}
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="max-w-2xl">
          <p className="leading-relaxed">
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

          
          <h4 className="mt-10 text-2xl text-[#B9471C] font-bold">
            Habilidades
          </h4>

          <div className="grid grid-cols-6 gap-4 mt-6 justify-items-start">
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
                className="w-12 h-15 flex items-center justify-center"
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
  )
}

export default AboutContainer