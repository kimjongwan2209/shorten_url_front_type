import styled from "@emotion/styled";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    border:2px solid #ffd700;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:100%;
        height:100vh;
    }
`

export const LayoutMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 880px;
    height: 420px;
    // margin:0px;
    // padding:0px;
    background-color: #00cccc;
    box-shadow: 10px 10px black;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 100vh;
        background: linear-gradient(-360deg, #2154a2, #618dcf, #90ff77, #e9e399);
        box-shadow: 3px 3px black;
    }
    `

export const Encase = styled.div`
    margin-top: 10px;
    
    @media (max-width: 768px) {
        display:flex; 
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 10px;
    }
`

export const UrlText = styled.span`
    font-size: 55px;
    font-weight: 800;
    color: white;
    text-shadow: -2px 0px black, 0px 2px black, 2px 0px black, 0px -2px black;
    
    
    @media (max-width: 768px) {
        font-size: 150%;
        font-weight: 800;
        color: white;
        text-shadow: -2px 0px black, 0px 2px black, 2px 0px black, 0px -2px black;
    }
`

export const InputBox = styled.input`
    width: 620px;
    height: 25px;
    padding: 5px;
    font-size: 25px;

     @media (max-width: 768px) {
        width: 80%;
        height: 25px;
        padding: 5px;
        font-size: 25px;
    }

`