import React from 'react'
import { useRouter } from 'next/router';
import UrlText from '../../components/UrlText';
import { MainContainer, LayoutMainBox } from '../../styles/main';
import { ButtonEncase, MainButton, MainButtonText } from '../../styles/button';
import { useRandomBackgroundColor } from '../../utils/BackgroundRandomColor';

export default function Url() {
    const router = useRouter();
    const backgroundColor = useRandomBackgroundColor()

    const gotoBack = () => {
        router.back();
    }
    return (
        <MainContainer backgroundColor={backgroundColor}>
            <LayoutMainBox>
                <MainButtonText>
                   나의 Shorten url
                </MainButtonText>
                <UrlText />
                <ButtonEncase>
                    <MainButton onClick={gotoBack}>
                        <MainButtonText>
                            다시 만들기
                        </MainButtonText>
                    </MainButton>
                </ButtonEncase>
            </LayoutMainBox>
        </MainContainer>
  )
}
