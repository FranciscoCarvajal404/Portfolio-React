import Hero from "./Hero"
import Slider from "../../components/Slider"

import {slides} from "../../components/slides"
import Acerca from "./Acerca"
import Habilidades from "./Habilidades"
import Proyectos from "./Proyectos"

const Home = () =>{
    return(
        <>
            <Hero/>
            <Slider slides={slides}/>
            <Acerca/>
            <Habilidades/>
            <Proyectos/>
        </>
        
    )
}

export default Home