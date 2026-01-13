import HomeButton from "./HomeButton"
import Navbar from "./Navbar"


const HomeContainer = () => {
  return (
    <div>
    <div className="text-[#2B2B2B] flex flex-col justify-center items-center w-screen">
      
        <div className="flex flex-col mt-20">
        <h1 className="text-5xl">Hola! Soy Mica</h1>
        <h1 className="text-5xl ml-10">Bienvenidos a <span className="text-[#B9471C] font-bold">Mi Portfolio</span></h1>
        </div>
        <div className="flex mt-20 justify-between w-200">
            <HomeButton title="About Me" href="/about-me" image="/assets/micabn.jpeg"/>
            <HomeButton title="Work" href="/work" image="/assets/workbn.png"/>
            <HomeButton title="Contact" href="/contact" image="/assets/contactbn.jpeg"/>
        </div>
    </div>
    </div>
  )
}

export default HomeContainer