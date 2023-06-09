/* eslint-disable react/prop-types */
import styled from "styled-components";

import Slide from "./Slide";
import { Link } from "react-router-dom";

const SliderStyled = styled.section`

    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 64px;
    width: 100%;

    .portfolio{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 32px;

        margin-top: 32px;
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
        width: 100%;
        overflow: hidden;

        padding: 0 32px;
    }

    .slider-track{
        display: flex;

        width: calc(250px * 12);
        overflow: hidden;


        animation: scroll 35s linear infinite;

        @keyframes scroll {
            0%{
                transform: translateX(0);
                -webkit-transform: translateX(0);
            }

            100%{
                transform: translateX(calc(-250px * 6));
                -webkit-transform: translateX(calc(-250px * 6));
            }
        }

    }

    @media screen and (min-width: 1024px){
        display: none;
    }
`

const Slider = ({slides}) =>{

    return(
        <SliderStyled> 
            <div className="portfolio" id="portafolio-mobile">
                <h2 id="portafolio">Portafolio</h2>
                <h3><Link to='/proyectos'>Ver más</Link></h3>
            </div>

            <div className="slider">
                <div className="slider-track">
                    {
                        slides.map((slide, key)=>{
                            const {imgPhone, title, tech} = slide
                            
                            return(
                                <Link key={key} to={`/proyectos/${key}`}>
                                    <Slide imgPhone={imgPhone} title={title} tech={tech}/>
                                </Link>
                            )
                        })
                    }
                    {
                        slides.map((slide, key)=>{
                            const {imgPhone, title, tech} = slide
                            
                            return(
                                <Link key={key} to={`/proyectos/${key}`}>
                                    <Slide imgPhone={imgPhone} title={title} tech={tech}/>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </SliderStyled>
    )
}

export default Slider