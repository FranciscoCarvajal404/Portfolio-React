import styled from "styled-components"

import { slides } from "../../components/slides"
import { Link } from "react-router-dom"

const StyledProyecto = styled.section`
    display: none;

    @media screen and (min-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 128px 64px;

        .grid{
            width: 100%;
            max-width: 1250px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 16px;

            img{
                aspect-ratio: 1/1;
            }
        }

        .hover-div{
            position: absolute;
            top: 0;
            opacity: 0;

            background-color: rgba(0,0,0,0.6);
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);

            padding: 16px;
            cursor: pointer;
            transition: 0.1s all ease;

            h3,h4{
                text-align: center;
            }

            h3{
                font-size: 2rem;
                margin-bottom: 8px;
            }

            h4{
                font-size: 1.5rem;
            }
        }

        .tile{
            position: relative;
            aspect-ratio: 1/1;
            width: 100%;
            height: 100%;
            transition: 0.1s all ease;

            :hover{
                .hover-div{
                    opacity: 1;
                    transition: 0.6s all ease;
                }
            }
        }

        .titulo{
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            max-width: 1250px;

            margin-bottom: 32px;

            p{
                font-size: 1.5rem;
                font-weight: 700;
            }
        }
    
    }
`

const Proyectos = () =>{
    return(
        <StyledProyecto>
            <div className="titulo">
                <h2 id="proyectos">Últimos proyectos</h2>
                <Link to='/proyectos'><p>Ver más</p></Link>
            </div>

            <div className="grid">
                {
                    slides.map((slide, i)=>{
                        const {title, tech, img} = slide
                        return(
                            <div className="tile" key={i}>
                                <img src={img}/>
                                <Link to={`/proyectos/${i}`}>
                                    <div className="hover-div">
                                        <h3>{title}</h3>
                                        <h4>{tech}</h4>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </StyledProyecto>
    )
}

export default Proyectos
