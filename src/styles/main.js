import styled from "@emotion/styled";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    border:2px solid  #ffd700;
    background-color: #8d192b;
`

export const LayoutMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 880px;
    height: 420px;
    background-color: #00cccc;
    box-shadow: 10px 10px black;
`

export const Encase = styled.div`
    margin-top: 10px;
`

export const UrlText = styled.span`
    font-size: 55px;
    font-weight: 800;
    color: white;
    text-shadow: -2px 0px black, 0px 2px black, 2px 0px black, 0px -2px black;
`

export const ButtonText = styled.span`
    font-size: 17px;
    font-weight: 800;
    color: white;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
`

export const InputBox = styled.input`
    width: 620px;
    height: 25px;
    padding: 5px;
    font-size: 25px;
`

export const Button = styled.button`
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
`

export const HiddenButton = styled.button`
    width: 890px;
    height: 35px;
    background-color: transparent;
    margin-bottom: 40px;
    border: none;
    cursor: pointer;
`