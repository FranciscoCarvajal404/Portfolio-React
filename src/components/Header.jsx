import styled from "styled-components"
import { Link } from "react-router-dom"

import logo from "/fc-nobg.png"

const Nav = styled.nav`
    width: 100%;
    padding: 0px 32px;
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

    .logo{
        width: 100%;
        max-width: 80px;
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
                    <li><Link to="/"><img src={logo} className="logo"/></Link></li>
                    <li><Link to="/#acerca-desk">Acerca</Link></li>
                    <li><Link to="/#skills">Habilidades</Link></li>
                    <li><Link to="/#proyectos">Proyectos</Link></li>
                    <li><Link to="/#contacto-desk">Contacto</Link></li>
                </ul>
            </Nav>
        </>
        
    )
}

export default Header