import React from 'react';
import { Button, ButtonText } from '../styles/main'
import useCopyClipBoard from '../hooks/useCopyClipBoard';

const UrlCopyClipboardButton = (propshortenUrl) => {
    const [isCopy, onCopy] = useCopyClipBoard();
    

    const handleCopyClipBoard = (text) => {
        onCopy(text);
    };

    console.log("132709", typeof propshortenUrl)
    console.log("132709", propshortenUrl.propshortenUrl
)
    return (
        <div>
            <Button onClick={() => handleCopyClipBoard(propshortenUrl.propshortenUrl)}>
                <ButtonText>
                    복사하기
                </ButtonText>
            </Button>
            {isCopy && window.confirm("복사가 완료되었습니다.")}
        </div>
    )
}

export default UrlCopyClipboardButton;


