import styled from "styled-components"

const Div = styled.div`

.menu {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
    
    z-index: 2;

    position: fixed;
    top: 0;
    left: 5%;

    width: 15%;
    max-width: 80px;
    min-width: 60px;
    filter: invert(99%) sepia(1%) saturate(954%) hue-rotate(167deg) brightness(93%) contrast(107%);
}
.line {
    fill: none;
    stroke: black;
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
    opacity: 0;
    width: 0;
    height: 0;
    transition: 0.6s all ease-in-out;
    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 32px;

    border-radius: 0 0 50% 0;

    background-color: rgba(0,0,0,0.6);
    backdrop-filter: blur(10px);

    transition: 0.6s all ease;

    ul{
        display: flex;
        flex-direction: column;
        gap: 64px;
        
        li{
            font-weight: 700;
            font-size: 1.5rem;
            opacity: 0;
        }
    }

}

.active{
    opacity: 1;
    height: 91.7vh;
    width: 60%;

    ul{
        li{
            animation: ani1 0.75s ease-out 0.6s forwards;
        }
    }
    
}

@keyframes ani1 {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

@media screen and (min-width: 768px){
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
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>

            <nav className="nav-menu">
                <ul>
                    <li>Acerca</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </Div>
    )
}

export default MenuHam