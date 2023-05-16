import styled from "styled-components"
import {GrContactInfo} from 'react-icons/gr'
import {FaToolbox, FaFolderMinus} from 'react-icons/fa'

const StyledPhoneNave = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    background-color: rgba(0,0,0,0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 0 8px 0;

    ul{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        li{
            font-weight: 600;
            font-size: 0.8rem;
            width: 33%;
            text-align: center;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    
    .dark-icon{
        filter: invert(99%);
        width: 20%;
        max-width: 25px;
        height: auto;
    }

    .icon{
        width: 20%;
        max-width: 25px;
        height: auto;
    }

    @media screen and (min-width: 1024px){
        display: none;
    }
`

const PhoneNav = () =>{
    return(
        <StyledPhoneNave>
            <ul>
                <li>
                    <FaFolderMinus className="icon"/>
                    Portafolio
                </li>
                <li>
                    <FaToolbox className="icon"/>
                    Skills
                </li>
                <li>
                    <GrContactInfo className="dark-icon"/>
                    CV
                </li>
            </ul>
        </StyledPhoneNave>
    )
}

export default PhoneNav