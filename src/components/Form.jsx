import styled from "styled-components"

import { colorOscuro, colorTitulo } from "./UI/variables"

const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    input{
        background-color: ${colorTitulo};
        color: ${colorOscuro};

        font-size: 1.3rem;
        font-weight: 500;
        line-height: normal;

        padding: 16px;
        margin-bottom: 32px;

        width: 100%;
        height: 50px;
    }

    label{
        align-self: flex-start;
        color: ${colorTitulo};

        font-size: 1.5rem;
        margin-bottom: 16px;
    }
    
    button{
        border: 1px solid ${colorTitulo};
        color: ${colorTitulo};

        width: 100%;
        height: 60px;

        padding: 16px;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1024px){
        width: 50%;
    }
`

const handleSubmit = (e) =>{
    e.preventDefault()
}

const Form = () =>{
    return(
        <StyledForm onSubmit={(e)=>{handleSubmit(e)}}>
            <label htmlFor="name">Nombre</label>
            <input name="name" id="name" type="text"/>
            
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email"/>
            
            <label htmlFor="subject">Asunto</label>
            <input name="subject" id="subject" type="text"/>
            
            <label htmlFor="message">Mensaje</label>
            <input name="message" id="message" type="text"/>
            
            <button>Enviar</button>
        </StyledForm>
    )
}

export default Form
