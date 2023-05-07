import styled from "styled-components"

const StyledSlide = styled.div`
    height: 400px;
    width: 30px;

    margin: 0 8px;

    flex: 0 0 250px;

    border-radius: 10px;
`

const Slide = ({imgPhone, title, tech}) =>{
    return(
        <StyledSlide style={
            {
                backgroundImage: `url(${imgPhone})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover'
            }}>
        </StyledSlide>
    )
}

export default Slide