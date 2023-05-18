import styled from "styled-components"

import { skills } from "../../components/skills"

const StyledHabilidades = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 32px;
    margin-bottom: 64px;

    .titulo{
        margin-bottom: 32px;
    }

    .skill-grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;

        gap: 64px;
    }

    .skill{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .skill-img, .skill-img--css{
        width: 50%;
        max-width: 80px;

        margin: 18px 0;

        filter: invert(99%) sepia(1%) saturate(836%) hue-rotate(165deg) brightness(97%) contrast(97%);
    }

    .skill-img--css{
        margin: 0;
    }

    .skill-titulo{
        font-size: 2rem;
        text-align: center;
    }

    @media screen and (min-width: 768px){
        .skill-grid{
        grid-template-columns: 1fr 1fr 1fr;
    }
    }

    @media screen and (min-width: 1024px){
        padding: 0 64px;

        .skill-grid{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 128px;
    }
    }
`

const Habilidades = () =>{
    return(
        <StyledHabilidades>

            <h2 className="titulo">Habilidades</h2>
            <div className="skill-grid">
                {
                    skills.map((skill, i)=>{
                        const {nombre, img} = skill

                        if(nombre=='CSS'){
                            return(
                                <div key={i} className="skill">
                                <img src={img} className="skill-img--css"/>
                                <h2 className="skill-titulo">{nombre}</h2>
                            </div>
                            )
                        }else{
                            return(
                            <div key={i} className="skill">
                                <img src={img} className="skill-img"/>
                                <h2 className="skill-titulo">{nombre}</h2>
                            </div>
                        )
                        }
                    })
                }
            </div>

        </StyledHabilidades>
    )
}

export default Habilidades