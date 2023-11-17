import Modal from 'react-modal';
import styled from "@emotion/styled";

export const Top = styled.div`
    position: relative; 
    width: 500px;
    height: 500px;
`


export const CustomQrModal = styled(Modal)`
    position: absolute; 
    top: 210px; 
    left: 750px; 
    width: 300px;
    height: 300px;
    margin: 50px 50px 50px 50px;
    display:flex;
    align-items: center;
    justify-contents: space-between;
`

export const QrBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #4f4f4f;
`

export const CloseButton = styled.button`
    width: 135px;
    height: 45px;
    margin: 20px;
    font-size: 12px;
    font-weight: 900;
    background: linear-gradient(to bottom, #CCCCCC, #999999);
    color: #fff;
`
       