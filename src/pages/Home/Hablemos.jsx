import styled from "styled-components"

const StyledHablemos = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 32px;
    gap: 64px;


    .info, .redes{
        display: none;
    }


    @media screen and (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;

        padding: 0 64px;

        h2{
            margin-bottom: 8px;
        }

        .info{
            display: block;
            width: 100%;
            p{
                margin-bottom: 64px;
            }
        }

        .redes{
            display: block;
            a{
                text-decoration: underline;
                margin-bottom: 16px;
            }
        }
    }

`

import Form from "../../components/Form"

const Hablemos = () =>{
    return(
        <StyledHablemos>
        <div>
            <h2>Hablemos</h2>
                <div className="info">
                    <p>¿Quieres entrar en contacto conmigo o solo charlar un rato? Me gustaría oirte</p>

                    <div className="redes">
                        <h2>Redes</h2>
                        <a href="https://www.linkedin.com/in/francisco-carvajal-villegas/" target="blank">LinkedIn</a>
                        <a href="https://github.com/FranciscoCarvajal404" target="blank">Github</a>
                    </div>
                </div>
        </div>
            

            <Form/>
        </StyledHablemos>
    )
}

export default Hablemos