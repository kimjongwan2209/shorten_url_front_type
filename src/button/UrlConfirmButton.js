import axios from "axios";
import { observer } from 'mobx-react';
import { useRouter } from "next/router";
import { Button, Encase, ButtonText } from '../../src/styles/main'
import store from "../store";


const UrlConfirmButton =observer(({ urlAddress }) => {
    const urlAddressPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.[^\s]{2,}(\/|$)/;
    const router = useRouter();
    const { urlStore } = store;
    
    const checkedUrl = async () => {
        console.log("스토어",urlStore);
        console.log("sdsds", urlAddress)
        console.log("sdsds", typeof urlAddress)
        try {
            if (urlAddressPattern.test(urlAddress)) {
                console.log("22", urlAddress)
                
                const response = await axios.post
                    (process.env.NEXT_PUBLIC_API_POSTKEY,
                        { url: urlAddress }
                    );
                
                console.log("무랑", response)
                const newShortenUrl = response.data.getNewUrl;
                console.log("뉴",newShortenUrl)
                urlStore.setShortenUrl(newShortenUrl);
                router.push('/url');
            } else if (urlAddress.length === 0) {
                window.confirm('URL 주소를 입력해주세요.');
            } else {
                window.confirm('올바르지 않은 URL 주소입니다.');
            }
        } catch (error) {
            console.error('API 호출 중 에러 발생:', error);
        }
    };

    return (
        <div>
            <Encase>
                <Button onClick={() => checkedUrl()}>
                    <ButtonText>
                        Url 생성하기
                    </ButtonText>
                </Button>
            </Encase>
        </div>
    )
});

export default UrlConfirmButton