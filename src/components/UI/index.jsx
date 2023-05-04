import styled from "styled-components";
import { colorAcento } from "./variables";

export const BoxPage = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 32px;
`

export const Button = styled.button`
    background: none;
    border-radius: 10px;
    border: 3px solid;
    padding: 8px 16px;
    font-size: 1.2rem;
    font-weight: 700;
    width: 100%;
    transition: 0.2s all ease;

    :hover{
        border-color: ${colorAcento};
        color: ${colorAcento};

        transition: 0.2s all ease;
    }
`