import styled from "styled-components"
import { Link } from "react-router-dom"
import {GrContactInfo} from 'react-icons/gr'
import {BiMessageDetail, BiFolderMinus} from 'react-icons/bi'

const StyledPhoneNave = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    max-height: 80px;
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

            a{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }
    }

    
    .dark-icon{
        filter: invert(99%);
        width: 100%;
        max-width: 30px;
        height: auto;
    }

    .icon{
        width: 20%;
        max-width: 30px;
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
                    <Link to='/proyectos'>
                        <BiFolderMinus className="icon"/>
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link to="/#acerca">
                        <BiMessageDetail className="icon"/>
                        Contacto
                    </Link>
                    
                </li>
                <li>
                    <a href="src/assets/CV_FCV.pdf" target="_blank">
                        <GrContactInfo className="dark-icon"/>
                        CV
                    </a>
                </li>
            </ul>
        </StyledPhoneNave>
    )
}

export default PhoneNav