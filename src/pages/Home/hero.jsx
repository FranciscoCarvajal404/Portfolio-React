import styled from "styled-components"

const HeroDiv = styled.main`
    width: 100%;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 116px 32px 64px 32px;
    line-height: normal;
    
    video{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
        opacity: 0.1;
        object-fit: cover;
    }


    h2{
        font-size: 1.5rem;
        font-weight: 600;
        align-self: flex-start;
        margin-top: 16px;
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
            <video autoPlay muted loop controls>
                <source src="https://rr4---sn-uvu5a2a5t-2cjl.googlevideo.com/videoplayback?expire=1684394389&ei=NX1lZJfoM8uYyAWQ4YrgDA&ip=165.231.182.100&id=o-AHBvD_oVL6hO3cACAeSwj99hncDtLCWqwxbcLuRhA3e0&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&spc=qEK7ByO7du13c1TbhcHaoGDZ4ld8tHEZSQpXlq2o7A&vprv=1&svpuc=1&mime=video%2Fmp4&ns=P1II_mREG_TLZnyl3pdwI9YN&gir=yes&clen=690946112&dur=5690.150&lmt=1651266535219608&keepalive=yes&fexp=24007246&c=WEB&txp=4535434&n=qAfz4O34dZDvaw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMVHWL4dAbWbqIA-byKemwu7ace7YxQxVYARcYMbqHFgCIDBaiRM9okwSSQkMP0OTnSZ79kof-9nElAopiWFv4bLA&redirect_counter=1&rm=sn-n8vrl7d&req_id=8e1117153466a3ee&cms_redirect=yes&ipbypass=yes&mh=cq&mip=2806:2f0:7420:e697:41ee:5d0f:647c:b08b&mm=31&mn=sn-uvu5a2a5t-2cjl&ms=au&mt=1684383424&mv=m&mvi=4&pl=47&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgRd5ZiHS-U03WN3aKansX3dx0DeJ8ooYTqYi84NoqosMCIE0FZfw-hLCdlEgdlZre0ZscHjbXFmMWYk2ib-WFXvPq"/>
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
        </HeroDiv>
    )
}

export default Hero