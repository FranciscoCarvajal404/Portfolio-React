import Hero from "./hero"
import Slider from "../../components/Slider"

import {slides} from "../../components/slides"
import Acerca from "./Acerca"

const Home = () =>{
    return(
        <>
            <Hero/>
            <Slider slides={slides}/>
            <Acerca/>
        </>
        
    )
}

export default Home