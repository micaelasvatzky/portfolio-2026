import HomeButton from "./HomeButton";

const HomeContainer = () => {
  return (
    <div>
      <div className="
        text-[#2B2B2B]
        flex flex-col justify-center items-center
        w-full
        px-4
        md:px-0
        md:w-screen
      ">

        
        <div className="
          flex flex-col
          mt-24
          md:mt-20
          text-center
          md:text-left
        ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            Hola! Soy Mica
          </h1>

          <h1 className="
            text-3xl sm:text-4xl md:text-5xl
            mt-2
            md:mt-0
            md:ml-10
          ">
            Bienvenidos a{" "}
            <span className="text-[#B9471C] font-bold">
              Mi Portfolio
            </span>
          </h1>
        </div>

        
        <div className="
          flex flex-col
          gap-6
          my-16
          w-full
          items-center
          sm:flex-row
          sm:justify-center
          sm:gap-8
          md:mt-20
          md:justify-between
          md:w-200
        ">
          <HomeButton
            title="Sobre Mí"
            href="/about-me"
            image="/assets/micabn.jpeg"
          />
          <HomeButton
            title="Trabajos"
            href="/work"
            image="/assets/workbn.png"
          />
          <HomeButton
            title="Contacto"
            href="/contact"
            image="/assets/contactbn.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
