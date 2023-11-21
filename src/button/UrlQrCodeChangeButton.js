import React, { useState } from "react";
import { UrlButtonText,UrlButtonMedia } from "../styles/button";
import { CustomQrModal, QrBox, CloseButton } from "../styles/customModal";
import QRCode from "qrcode.react";

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
             <UrlButtonMedia onClick={openModal}>
                <UrlButtonText>
                    QR코드 보기
                </UrlButtonText>
            </UrlButtonMedia>
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