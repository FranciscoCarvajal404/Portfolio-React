import styled from "styled-components"

const StyledFooter = styled.footer`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 70px;
    padding:48px 64px;

    display: none;

    background-color: rgba(0,0,0,1);

    h2{
        font-size: 1rem;
        text-align: center;
    }

    @media screen and (min-width: 1024px){
        display: flex;
    }
`

const Footer = () =>{
    return(
        <StyledFooter>
            <h2>Desarrollado por Francisco Carvajal Villegas</h2>
            <h2>2023</h2>
        </StyledFooter>
    )
}

export default Footer