import Image from "next/image";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-screen min-h-5xl flex flex-col justify-center items-center px-10 text-[#2B2B2B]"
    >
      <h1 className="text-5xl text-[#B9471C] font-bold mb-12">
        Contact
      </h1>

      <div className="flex w-screen max-w-6xl gap-16 items-start justify-center">
        
       
        <div className="w-full max-w-md">
          <p className="leading-relaxed mb-8">
            Si te interesa mi perfil, querés hacerme una consulta o simplemente
            conectar, podés escribirme o encontrarme en mis redes profesionales.
          </p>

          <Form />
        </div>

       
        <div className="flex flex-col items-center">
          
        
          <div className="flex gap-10 mb-6">
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

          <div className="shrink-0">
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
