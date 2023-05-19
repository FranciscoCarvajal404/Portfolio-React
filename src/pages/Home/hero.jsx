import styled from "styled-components"

import video_bg from "/video-bg.mp4"

const HeroDiv = styled.main`
    width: 100%;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 116px 32px 64px 32px;
    line-height: normal;

    .redes{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 64px;

        width: 100%;

        a{
            text-decoration: underline;
            font-size: 1.2rem;
        }
    }
    
    video{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.1;
        object-fit: cover;
    }


    h2{
        font-size: 1.5rem;
        font-weight: 600;
        align-self: flex-start;
        margin: 16px 0;
    }

    .wordCarousel {
    font-size: 2.5rem;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    
    span{
            margin-right: 8px;
        }
    div {
        overflow: hidden;
        position: relative;
        float: right;
        height: 110px;
        padding-top: 10px;
        margin-top: -10px;

        
        li {
            font-weight: 700;
            height: auto;
            margin-bottom: 55px;
            display: block;
            text-align: left;
        }
    }
}

.flip2 { animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip3 { animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip4 { animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip5 { animation: flip5 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }

@keyframes flip2 {
    0% { margin-top: -180px; }
    5% { margin-top: -150px;  }
    50% { margin-top: -150px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -160px; }
}

@keyframes flip3 {
    0% { margin-top: -270px; }
    5% { margin-top: -180px; }
    33% { margin-top: -180px; }
    38% { margin-top: -90px; }
    66% { margin-top: -90px; }
    71% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

@keyframes flip4 {
    0% { margin-top: -360px; }
    5% { margin-top: -270px; }
    25% { margin-top: -270px; }
    30% { margin-top: -180px; }
    50% { margin-top: -180px; }
    55% { margin-top: -90px; }
    75% { margin-top: -90px; }
    80% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -360px; }
}

@keyframes flip5 {
    0% { margin-top: -450px; }
    5% { margin-top: -360px; }
    20% { margin-top: -360px; }
    25% { margin-top: -270px; }
    40% { margin-top: -270px; }
    45% { margin-top: -180px; }
    60% { margin-top: -180px; }
    65% { margin-top: -90px; }
    80% { margin-top: -90px; }
    85% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -450px; }
}

@media screen and (min-width: 569px){
    @keyframes flip2 {
    0% { margin-top: -180px; }
    5% { margin-top: -105px;  }
    50% { margin-top: -105px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -160px; }
}

    h2{
        align-self: center;
    }
}

@media screen and (min-width: 892px){


    @keyframes flip2 {
    0% { margin-top: -180px; }
    5% { margin-top: -102px;  }
    50% { margin-top: -102px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -160px; }
}

@media screen and (min-width: 1024px){
        padding: 0 32px;
        height: 100vh;
    }

}
`

const Hero = () =>{
    return(
        <HeroDiv>
            <video autoPlay muted loop>
                <source src={video_bg}/>
            </video>
            <h1 className="wordCarousel">
                <span>¡Hola!, soy</span>
                <div>
                    <ul className="flip2">
                        <li>desarrollador front end</li>
                        <li>Francisco Carvajal Villegas</li>
                    </ul>
                </div>
            </h1>
            <h2>Construyo páginas web</h2>
            <div className="redes">
                <a href="https://www.linkedin.com/in/francisco-carvajal-villegas/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/FranciscoCarvajal404" target="_blank" rel="noreferrer">Github</a>
            </div>
        </HeroDiv>
    )
}

export default Hero