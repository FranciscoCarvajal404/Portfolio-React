/* eslint-disable react/prop-types */
import styled from "styled-components";

import Slide from "./Slide";

const SliderStyled = styled.section`

    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 128px;

    .portfolio{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 32px;

        margin-bottom: 32px;

        h2{
            font-weight: 700;
            font-size: 1.5rem;
        }

        h3{
            font-weight: 700;
            font-size: 1rem;
        }
    }

    .slider{
        display: flex;

        overflow: hidden;
        overflow-x: auto;

        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;

        width: 100%;

        box-sizing: content-box;

    }
`

const Slider = ({slides}) =>{

    return(
        <SliderStyled> 
            <div className="portfolio">
                <h2>Portafolio</h2>
                <h3>Ver más</h3>
            </div>

            <div className="slider">
                {
                    slides.map((slide, key)=>{
                        const {imgPhone, title, tech} = slide
                        
                        return(
                            <Slide key={key} imgPhone={imgPhone} title={title} tech={tech}/>
                        )
                    })
                }
            </div>
            
        </SliderStyled>
    )
}

export default Slider