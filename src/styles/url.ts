import styled from "@emotion/styled";

export const TextContainer = styled.div`
        width:820px;
        height: 180px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: 2px solid #83dcb7;

        @media (max-width: 768px) {
                width: 90%;
                height: 15vh;

    }
`

export const UrlDiv = styled.div`
        width:95%;
        height:35%;
        border: 2px solid black; 
        display:flex;
        align-items: center;
        justify-content: center;
`

export const ButtonDiv = styled.div`
        width:95%;
        height:30%;
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        
        @media (max-width: 768px) {
                width: 65%;
                height: 20%;
                display:flex;
                align-items: center;
                justify-content: center;
    }

`

export const UrlTextSpan = styled.span`
        font-size: 2vw;
        font-weight: 500;
        
        @media (max-width: 768px) {
                font-size: 100%;
                font-weight: 600;
    }
`
