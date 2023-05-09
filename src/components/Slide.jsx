import styled from "styled-components"

const StyledSlide = styled.div`
height: 400px;
width: 30px;

margin: 0 8px;

flex: 0 0 250px;

border-radius: 10px;

background-position: top;

background-size: cover;
`

// eslint-disable-next-line react/prop-types, no-unused-vars
const Slide = ({imgPhone, title, tech}) =>{


    return(
        <StyledSlide style={{backgroundImage: `url(${imgPhone})`}}>
        </StyledSlide>
    )
}

export default Slide