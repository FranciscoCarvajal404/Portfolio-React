import styled from "styled-components"

const Nav = styled.nav`
    width: 100%;
    padding: 16px 32px;
    display: none;

    ul{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        li{
            font-weight: 700;
            font-size: 1.1rem;
        }
    }

    @media screen and (min-width: 768px){
        display: block;
    }
`

const Header = () =>{
    return(
        <>
            <Nav>
                <ul>
                    <li>Acerca</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </Nav>
        </>
        
    )
}

export default Header