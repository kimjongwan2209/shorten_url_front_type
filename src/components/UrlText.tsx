import React from 'react';
import { observer } from 'mobx-react';
import { useRouter } from "next/router";
import UrlCopyClipboardButton from "../atoms/buttons/UrlCopyClipboardButton";
import UrlQrCodeChangeButton from "../atoms/buttons/UrlQrCodeChangeButton";
import {Encase} from '../styles/main'
import { ButtonDiv, TextContainer, UrlDiv, UrlTextSpan } from "../styles/url";
import { PropshortenUrlType } from "../types/type";
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
                    <UrlQrCodeChangeButton propshortenUrl ={ urlStore.shortenUrl.toString() } />
                    <UrlCopyClipboardButton propshortenUrl = { urlStore.shortenUrl.toString() }/>
                </ButtonDiv>
            </TextContainer>
        </Encase>
    )
});

export default UrlText