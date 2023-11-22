import styled from "@emotion/styled";

export const MainButton = styled.button`
    width: 135px;
    height: 45px;
    font-size: 18px;
    font-weight: 900;
    background: linear-gradient(to bottom, #CCCCCC, #999999);
    color: #fff;
    box-shadow: 2px 2px black;
    text-shadow: -2px 0px #0099cc, 0px 2px #0099cc, 2px 0px #0099cc, 0px -2px #0099cc;
    border: none;
    border-radius: 2px;
    padding: 10px 15px;
    outline: none;
    transition: background-color 0.1s, color 0.1s transform 0.3s;

    &:hover{
        cursor:pointer;
        background-color: #000;
        color: #fff;
        transform: scale(1.05);
    }   

     @media (max-width: 768px) {
        display:flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30px;
    }
    `

export const UrlButton = styled.button`
    width: 135px;
    height: 45px;
    font-size: 18px;
    font-weight: 900;
    background: linear-gradient(to bottom, #CCCCCC, #999999);
    color: #fff;
    box-shadow: 2px 2px black;
    text-shadow: -2px 0px #0099cc, 0px 2px #0099cc, 2px 0px #0099cc, 0px -2px #0099cc;
    border: none;
    border-radius: 2px;
    padding: 10px 15px;
    outline: none;
    transition: background-color 0.1s, color 0.1s transform 0.3s;

    @media (max-width: 768px) {
        display:flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30px;
    }

    &:hover{
        cursor:pointer;
        background-color: #000;
        color: #fff;
        transform: scale(1.05);
    }
    `

export const UrlButtonMedia = styled.button`
    width: 135px;
    height: 45px;
    font-size: 18px;
    font-weight: 900;
    background: linear-gradient(to bottom, #CCCCCC, #999999);
    color: #fff;
    box-shadow: 2px 2px black;
    text-shadow: -2px 0px #0099cc, 0px 2px #0099cc, 2px 0px #0099cc, 0px -2px #0099cc;
    border: none;
    border-radius: 2px;
    padding: 10px 15px;
    outline: none;
    transition: background-color 0.1s, color 0.1s transform 0.3s;

    @media (max-width: 768px) {
        display:none;
        border: 2px solid red;
    }

    &:hover{
        cursor:pointer;
        background-color: #000;
        color: #fff;
        transform: scale(1.05);
    }
    `

export const MainButtonText = styled.span`
    font-size: 17px;
    font-weight: 800;
    color: white;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;

     @media (max-width: 768px) {
        display:block;
        flex-direction: row;
        font-size: 12px;
        font-weight: 400;
    }
    
`

export const UrlButtonText = styled.span`
    font-size: 17px;
    font-weight: 800;
    color: white;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;

    @media (max-width: 768px) {
        display:block;
        flex-direction: row;
        font-size: 10px;
        font-weight: 400;
    }
`

export const HiddenButton = styled.button`
    width: 890px;
    height: 35px;
    background-color: transparent;
    margin-bottom: 40px;
    border: none;
    cursor: pointer;
    
    @media (max-width: 768px) {
        dispaly:none;
    }
`

export const ButtonEncase = styled.div`
    @media (max-width: 768px) {
        display:flex; 
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width: 40%;
        margin-top: 10px;
    }
`