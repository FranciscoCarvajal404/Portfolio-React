/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import styled from "styled-components"

import { proyectos } from "./proyectos"

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

`
const ProyectoPage = () =>{
    
    let {id} = useParams();
    const project = proyectos[id]
    const { img, title, intro} = project

    return(
        <StyledPage>
            <h1>{title}</h1>
            <img src={img}/>
            <div>
                <p>
                    {intro}
                </p>
            </div>
        </StyledPage>
            
    )
}

export default ProyectoPage