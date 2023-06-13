/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import styled from "styled-components"

import { proyectos } from "./proyectos"
import { colorTitulo, colorAcento } from "./UI/variables"

const StyledPage = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100%;

    padding: 80px 32px;

    h1{
        font-size: 2rem;
        margin-bottom: 32px;
    }

    img{
        border-radius: 10px;
        margin-bottom: 32px;

        max-width: 1000px;
    }

    p{
        font-size: 1.25rem;
    }

    .botones{
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1000px;
        margin-bottom: 16px;

        a{
            width: 45%;
            button{
                border: 1px solid ${colorTitulo};
                padding: 16px;
                width: 100%;
                border-radius: 10px;
    
                color: ${colorTitulo};
                font-weight: 700;
                font-size: 1rem;
                transition: 0.3s all ease;
    
                :hover{
                    color: ${colorAcento};
                    border-color: ${colorAcento};
                    transition: 0.3s all ease;
                }
            }
        }

    }

    @media (width >= 1024px){
        .botones{
            a{
                button{
                    font-size: 1.2rem;
                }
            }
        }
    }

`
const ProyectoPage = () =>{
    
    let {id} = useParams();
    const project = proyectos[id]
    const { img, title, intro, demo, repo } = project

    return(
        <StyledPage>
            <h1>{title}</h1>
            <a href={demo} target="_blank" rel="noreferrer"><img src={img}/></a>
            <div className="botones">
                <a href={demo} target="_blank" rel="noreferrer"><button>Demo</button></a>
                <a href={repo} target="_blank" rel="noreferrer"><button>Repositorio</button></a>
            </div>
            <div>
                <p>
                    {intro}
                </p>
            </div>
        </StyledPage>
            
    )
}

export default ProyectoPage