import styled from "styled-components"
const HeroDiv = styled.main`
    width: 100vw;
    height: 90vh;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 32px;
    line-height: normal;

    h1{
        font-size: 2.4rem;
        margin: 32px 0 32px 0;
    }


    div{
        display: flex;
        flex-direction: column;

        h2{
        font-size: 1.3rem;
    }


    .arrow{
        height: auto;
        width: 20%;
        align-self: center;
    }
}
`
    

const Hero = () =>{
    return(
        <HeroDiv>
            <div>
                <h1>Construyo fabulosas páginas web</h1>
                <h2>Desarrollador front end</h2>
            </div>
        </HeroDiv>
    )
}

export default Hero