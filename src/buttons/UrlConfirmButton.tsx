import React from 'react';
import { observer } from 'mobx-react';
import { useRouter } from "next/router";
import { MainButton, MainButtonText } from "../styles/button";
import { Encase } from "../styles/main";
import createShortenUrl from '../apis/urlApi';
import store from "../store";


const UrlConfirmButton = observer(({ urlAddress }: { urlAddress: string | '' })=> {
    const router = useRouter();
    const { urlStore } = store;
    
    const checkedUrl = async () => {
        try {
            const newShortenUrl = await createShortenUrl(urlAddress);
            urlStore.setShortenUrl(newShortenUrl);
            router.push('/url');
        }
        catch (error:any) {
            if (error.message) {
                window.confirm(error.message);
            }
        }
    };

    return (
        <div>
            <Encase>
                <MainButton onClick={checkedUrl}>
                    <MainButtonText>
                        Url 생성하기
                    </MainButtonText>
                </MainButton>
            </Encase>
        </div>
    )
});

export default UrlConfirmButton