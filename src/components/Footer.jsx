import styled from "styled-components"

const StyledFooter = styled.footer`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding:32px 128px;

    display: none;

    background-color: rgba(0,0,0,1);

    h2{
        font-size: 1rem;
        text-align: center;
    }

    .redes{
            display: flex;
            gap: 64px;
            a{
                text-decoration: underline;
                margin-bottom: 16px;
                font-size: 1.2rem;
            }
        }

    @media screen and (min-width: 1024px){
        display: flex;
    }
`

const Footer = () =>{
    return(
        <StyledFooter>
            <div className="redes">
                        <a href="https://www.linkedin.com/in/francisco-carvajal-villegas/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/FranciscoCarvajal404" target="_blank" rel="noreferrer">Github</a>
            </div>
            <h2>Desarrollado por Francisco Carvajal Villegas</h2>
            <h2>2023</h2>
        </StyledFooter>
    )
}

export default Footer