import styled from "styled-components"
import {GrContactInfo} from 'react-icons/gr'
import {FaToolbox, FaFolderMinus} from 'react-icons/fa'

const StyledPhoneNave = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    backdrop-filter: blur(5px);

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
        height: auto;
    }

    .icon{
        width: 20%;
        height: auto;
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