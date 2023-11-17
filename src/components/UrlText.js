import { observer } from 'mobx-react';
import { useRouter } from "next/router";
import UrlCopyClipboardButton from "../button/UrlCopyClipboardButton";
import UrlQrCodeChangeButton from "../button/UrlQrCodeChangeButton";
import {Encase} from '../styles/main'
import { ButtonDiv, TextContainer, UrlDiv, UrlTextSpan } from "../styles/url";
import store from "../store";


const UrlText = observer(() => {
    const router = useRouter();
    const { urlStore } = store;

    return (
        <Encase>
            <TextContainer>
                <UrlDiv>
                    <UrlTextSpan>
                        {urlStore.shortenUrl}
                    </UrlTextSpan>
                </UrlDiv>
                <ButtonDiv>
                    <UrlQrCodeChangeButton propshortenUrl={urlStore.shortenUrl}/>
                    <UrlCopyClipboardButton propshortenUrl ={urlStore.shortenUrl}/>
                </ButtonDiv>
            </TextContainer>
        </Encase>
    )
});

export default UrlText