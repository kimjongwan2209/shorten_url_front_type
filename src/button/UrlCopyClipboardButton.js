import React from 'react';
import { UrlButton, UrlButtonText } from "../styles/button";
import useCopyClipBoard from '../hooks/useCopyClipBoard';

const UrlCopyClipboardButton = (propshortenUrl) => {
    const [isCopy, onCopy] = useCopyClipBoard();
    

    const handleCopyClipBoard = (text) => {
        onCopy(text);
    };
    
    return (
        <div>
            <UrlButton onClick={() => handleCopyClipBoard(propshortenUrl.propshortenUrl)}>
                <UrlButtonText>
                    복사하기
                </UrlButtonText>
            </UrlButton>
            {isCopy && window.confirm("복사가 완료되었습니다.")}
        </div>
    )
}

export default UrlCopyClipboardButton;