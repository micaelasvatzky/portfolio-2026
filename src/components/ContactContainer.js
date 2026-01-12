import Image from "next/image";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-screen min-h-screen flex flex-col justify-center items-center px-10 text-[#2B2B2B]"
    >
      <h1 className="text-5xl text-[#B9471C] font-bold mb-12">Contact</h1>

      <div className="flex w-screen max-w-6xl gap-16 items-center justify-center">
        <div className="max-w-3xl">
          <div>
            <p className="leading-relaxed mb-8">
              Si te interesa mi perfil, querés hacerme una consulta o
              simplemente conectar, podés escribirme o encontrarme en mis redes
              profesionales.
            </p>
          </div>

          <Form />
        </div>

        <div>
          <div className="flex gap-10">
            <a
              href="https://github.com/micaelasvatzky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition"
            >
              <Image
                src="/assets/github.png"
                alt="GitHub"
                width={32}
                height={32}
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
                width={32}
                height={32}
              />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="shrink-0 mt-5">
            <Image
              src="/assets/contactbn.jpeg"
              alt="Contacto"
              width={300}
              height={400}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
