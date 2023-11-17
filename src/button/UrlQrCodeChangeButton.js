import React, { useState } from "react";
import { Button, ButtonText } from '../styles/main'
import { Top ,CustomQrModal, QrBox, CloseButton } from "../styles/customModal";
import QRCode from "qrcode.react";
import urlStore from "../store/urlStore";

const UrlQrCodeChangeButton = (propshortenUrl) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div>
             <Button onClick={openModal}>
                <ButtonText>
                    QR코드 보기
                </ButtonText>
            </Button>
                <CustomQrModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="QR Code Modal"
                >
                    <QrBox>
                        <QRCode value={propshortenUrl.propshortenUrl} />
                        <CloseButton onClick={closeModal}>닫기</CloseButton>
                    </QrBox>
                </CustomQrModal>
        </div>
    );
};

export default UrlQrCodeChangeButton;