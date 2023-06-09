import styled from "styled-components"
import { colorTitulo } from "./UI/variables"
import { HashLink } from "react-router-hash-link"

const Div = styled.div`

.menu { 
    
    border: none;
    cursor: pointer;
    display: flex;
    padding: 4px 6px 6px 4px;
    
    z-index: 2;
    
    position: fixed;
    top: 0;
    left: 0%;
    
    border-radius: 0 0 50% 0;
    
    width: 20%;
    max-width: 50px;
    min-width: 60px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.6s all ease;
}
.line {
    fill: none;
    stroke: ${colorTitulo};
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
    }
.line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
}
.line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
}
.opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
}
.opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
}
.opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
}

.nav-menu{
    z-index: 1;
    opacity: 0;
    width: 0;
    height: 0;
    transition: 0.6s all ease-in-out;
    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 32px;

    border-radius: 0 50% 50% 0;

    background-color: rgba(0,0,0,0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); 

    transition: 0.6s all ease;

    ul{
        display: flex;
        flex-direction: column;
        gap: 64px;
        
        li{
            font-weight: 700;
            font-size: 1.5rem;
            opacity: 0;
            display: none;
        }
    }

}

.active{
    opacity: 1;
    height: 90%;
    width: 60%;

    ul{
        li{
            animation: ani1 0.75s ease-out 0.6s forwards;
            display: block;
        }
    }
    
}

.opened{
    background-color: transparent;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
    transition: 0.6s all ease;
}

@keyframes ani1 {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

@media screen and (min-width: 1024px){
    display: none;
}
`
const animateMenu = () => {
    const menu = document.querySelector('.nav-menu')
    menu.classList.toggle('active')
}

const animateHam = () =>{
    const button = document.querySelector('.menu')
    button.classList.toggle('opened')
    button.setAttribute('aria-expanded', button.classList.contains('opened'))
    animateMenu()
}

const MenuHam = () =>{
    return(
        <Div>
            <button className="menu" onClick={()=>animateHam()}
            aria-label="Main Menu">
                <svg width="80%" height="80%" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>

            <nav className="nav-menu">
                <ul>
                    <li><HashLink to="/#acerca">Acerca</HashLink></li>
                    <li><HashLink to="/#skills">Habilidades</HashLink></li>
                    <li><HashLink to="/#portafolio-mobile">Proyectos</HashLink></li>
                    <li><HashLink to="/#contacto">Contacto</HashLink></li>
                </ul>
            </nav>
        </Div>
    )
}

export default MenuHam