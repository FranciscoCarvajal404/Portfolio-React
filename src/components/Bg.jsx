import styled from "styled-components"
import video_bg from "/video-bg.mp4"

const StyledVideo = styled.video`

    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.1;
    object-fit: cover;
    
`

const Bg = () =>{
    return(
        <StyledVideo autoPlay muted loop playsinline>
            <source src={video_bg}/>
        </StyledVideo>
    )
}

export default Bg