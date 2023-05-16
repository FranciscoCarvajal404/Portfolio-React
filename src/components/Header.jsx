import styled from "styled-components"

const Nav = styled.nav`
    width: 100%;
    padding: 16px 32px;
    display: none;
    z-index: 2;

    transition: 0.3s all ease;

    ul{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        li{
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 1024px){
        display: block;
        position: sticky;
        top: 0;
    }
`

const animateHeader = (e) =>{
    e.preventDefault();
    const header = document.querySelector(".header");

    const windowHeight = window.scrollY;
    header.classList.toggle("header--active", windowHeight>0);
}

window.addEventListener("scroll", animateHeader);

const Header = () =>{
    return(
        <>
            <Nav className="header">
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