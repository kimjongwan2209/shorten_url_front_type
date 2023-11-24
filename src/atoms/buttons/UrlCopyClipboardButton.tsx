import React from 'react';
import { UrlButton, UrlButtonText } from "../../styles/button";
import useCopyClipBoard from '../../hooks/useCopyClipBoard';
import { PropshortenUrlType } from '../../types/type';

const UrlCopyClipboardButton: React.FC<PropshortenUrlType> = ({ propshortenUrl })=> {
    const [isCopy, onCopy] = useCopyClipBoard();
    

    const handleCopyClipBoard = () => {
        if (typeof onCopy === 'function') {
            onCopy(propshortenUrl);
        }
    };
    
    return (
        <div>
            <UrlButton onClick={handleCopyClipBoard}>
                <UrlButtonText>
                    복사하기
                </UrlButtonText>
            </UrlButton>
            {isCopy && window.confirm("복사가 완료되었습니다.")}
        </div>
    )
}

export default UrlCopyClipboardButton;