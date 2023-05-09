import styled from "styled-components"

const StyledAcerca = styled.section`
    display: flex;
    flex-direction: column;

    padding: 0 32px;

    .info{
        display: flex;
        flex-direction: column;

        margin-bottom: 16px;

        h2{
            font-size: 2.5rem;
            margin-bottom: 16px;
        }

        p{
            font-size: 1.2rem;
        }
    }

    img{
        border-radius: 100%;
    }
`

const Acerca = () =>{
    return(
        <StyledAcerca>

            <div className="info">
                <h2>Acerca</h2>
                <p>Actualmente con 21 años radicando en Puebla, México.
                    <br/>Soy una persona que cuida mucho los detalles, organizada y que piensa que la planificación es muy importante en un proyecto.
                </p>
            </div>

            <img src="/yo.jpeg"/>

        </StyledAcerca>
    )
}

export default Acerca