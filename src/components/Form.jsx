import styled from "styled-components"
import emailjs from "emailjs-com"
import { validacion} from "../js/validaciones"

import {colorOscuro, colorTitulo, colorAcento } from "./UI/variables"

const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 48px;

    input{
        background-color: ${colorTitulo};
        color: ${colorOscuro};

        font-size: 1.3rem;
        font-weight: 500;
        line-height: normal;

        padding: 16px;

        width: 100%;
        height: 50px;

        ::selection{
            background-color: ${colorOscuro};
            color: ${colorTitulo};
        }

        ::-moz-selection{
            background-color: ${colorOscuro};
            color: ${colorTitulo};
        }

    }

    span{
        position: relative;
        bottom: 85px;
        transition: 0.3s all ease;
    }

    input:focus+span{
        color: ${colorAcento};
        transition: 0.3s all ease;
    }

    input:invalid{
        border: 2px red solid;
    }

    label{
        width: 100%;
        align-self: flex-start;
        color: ${colorTitulo};

        font-size: 1.5rem;

        transition: 0.3s all ease;
    }

    
    button{
        border: 1px solid ${colorTitulo};
        color: ${colorTitulo};

        width: 100%;
        height: 60px;

        padding: 16px;
        font-size: 1.5rem;

        transition: 0.3s all ease;
        :hover{
            color: ${colorAcento};
            border-color: ${colorAcento};
            transition: 0.3s all ease;
        }
    }
    

    .redes-mobile{
        display: flex;
        gap: 64px;
        margin-top: 24px;

        a{
            font-size: 1.2rem;
            text-decoration: underline;
        }
    }

    @media screen and (min-width: 1024px){
        width: 50%;

        .redes-mobile{
            display: none;
        }
    }
`

const Form = () =>{

    const enviarMail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_hi9ey3c', 'template_q3t9d27', e.target, 'ERAGA-Frbhfnr9nap').then(res => {
            alert("Mensaje enviado correctamente")
            console.log(res);
        })
    }


    return(
        <StyledForm onSubmit={(e)=>{enviarMail(e)}}>
            <label htmlFor="name" id="contacto-desk">
                <input name="name" id="name" type="text" onBlur={(e)=>validacion(e)}/>
                <span>Nombre</span>
                {/* <span className="error-nombre">{mensajeError}</span> */}
            </label>
            
            <label htmlFor="email">
                <input name="email" id="email" type="email" onBlur={(e)=>validacion(e)}/>
                <span>Email</span>
                {/* <span className="error-email">{mensajeError}</span> */}
            </label>
            
            <label htmlFor="subject">
                <input name="subject" id="subject" type="text" onBlur={(e)=>validacion(e)}/>
                <span>Asunto</span>
                {/* <span className="error-subject">{mensajeError}</span> */}
            </label>
            
            <label htmlFor="message">
                <input name="message" id="message" type="text" onBlur={(e)=>validacion(e)}/>
                <span>Mensaje</span>
                {/* <span className="error-message">{mensajeError}</span> */}
            </label>
            
            <button>Enviar</button>
            <div className="redes-mobile">
                <a href="https://www.linkedin.com/in/francisco-carvajal-villegas/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/FranciscoCarvajal404" target="_blank" rel="noreferrer">Github</a>
            </div>

            <script src="../assets/js/validaciones"></script>
        </StyledForm>
    )
}

export default Form
