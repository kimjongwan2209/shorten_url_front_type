import React from 'react'
import { useRouter } from 'next/router';
import UrlText from '../../components/UrlText';
import {MainContainer, LayoutMainBox, ButtonText,Encase, Button} from '../../styles/main'

export default function Url() {
    const router = useRouter();

    const gotoBack = () => {
        router.back();
    }
    return (
        <MainContainer>
            <LayoutMainBox>
                <ButtonText>
                   나의 Shorten url
                </ButtonText>
                <UrlText />
                <Encase>
                    <Button onClick={gotoBack}>
                        <ButtonText>
                            다시 만들기
                        </ButtonText>
                    </Button>
                </Encase>
            </LayoutMainBox>
        </MainContainer>
  )
}
