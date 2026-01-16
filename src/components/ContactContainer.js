import Image from "next/image";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        w-full
        min-h-5xl
        flex flex-col
        justify-center
        items-center
        px-4
        pb-6
        sm:px-6
        md:px-10
        text-[#2B2B2B]
        md:w-screen
        md:min-h-5xl
      "
    >
      {/* Título */}
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
        Contacto
      </h1>

      {/* Contenido */}
      <div
        className="
          flex flex-col
          gap-12
          w-full
          max-w-6xl
          items-center
          md:flex-row
          md:gap-16
          md:items-start
          md:justify-center
          md:w-screen
        "
      >
        {/* Texto + Form */}
        <div className="w-full max-w-md">
          <p className="leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
            Si te interesa mi perfil, querés hacerme una consulta o simplemente
            conectar, podés escribirme o encontrarme en mis redes profesionales.
          </p>

          <Form />
        </div>

        {/* Redes + Imagen */}
        <div className="flex flex-col items-center">
          {/* Redes */}
          <div className="flex gap-8 sm:gap-10 mb-6">
            <a
              href="https://github.com/micaelasvatzky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition"
            >
              <Image
                src="/assets/github.png"
                alt="GitHub"
                width={28}
                height={28}
              />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/micaela-svatzky-402082279/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition"
            >
              <Image
                src="/assets/linkedin.png"
                alt="LinkedIn"
                width={28}
                height={28}
              />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Imagen */}
          <div className="shrink-0">
            <Image
              src="/assets/contactbn.jpeg"
              alt="Contacto"
              width={300}
              height={400}
              className="
                object-cover
                rounded-2xl
                w-48
                sm:w-56
                md:w-[300px]
                h-auto
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
