/* eslint-disable react/prop-types */
import styled from "styled-components"

import {colorAcento, colorTitulo} from "../components/UI/variables"
import { Link } from "react-router-dom"

const StyledCard = styled.div`

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    margin-bottom: 40px;

    img{
        margin-bottom: 16px;
        border-radius: 16px;
        border: 2px solid ${colorTitulo};

        aspect-ratio: 3/2;
        max-height: 450px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
    

    h2{
        font-size: 1.5rem;
        margin-bottom: 8px;
        width: 100%;
    }

    p{
        display: none;
    }

    h3{
        font-size: 1.2rem;
        font-weight:500;
        margin-bottom: 24px;
    }
    
    button{
        width: 65%;
        max-width: 205px;
        font-size: 1.5rem;
        border: 1px solid ${colorTitulo};
        padding: 8px 32px;
        border-radius: 100px;

        :hover{
            color: ${colorAcento};
            border-color: ${colorAcento};
            transition: 0.3s all ease;
        }
    }

    .reverse{
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    @media screen and (min-width: 1024px){
        flex-direction: row;
        gap: 5%;

        p{
            display: block;
            line-height: 2;
            font-size: 1.25rem;
        }

        button{
            max-width: none;
        }
    }
`

const ProjectCard = ({ id, imagen, titulo, tags, descripcion,reverse}) =>{

    return(
        <StyledCard className={reverse ? 'odd' : ''}>
            <img src={imagen}/>
            <div className={reverse}>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <h3>{tags.join(' - ')}</h3>
                <button><Link to={`${id}`}>Ver trabajo</Link></button>
            </div>
        </StyledCard>
    )
}

export default ProjectCard