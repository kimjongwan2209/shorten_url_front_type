import React from 'react'
import { useRouter } from 'next/router';
import { LayoutMainBox, Encase } from '../../styles/main'
import { MainButton, MainButtonText } from '../../styles/button';
import { LoveMain, MainText } from '../../styles/hidden'
export default function Url() {
    const router = useRouter();

    const gotoBack = () => {
        router.back();
    }

    return (
        <LoveMain>
            <audio controls autoPlay>
                <source src="/11-20.mp3" type="audio/mp3" />
            </audio>
            <LayoutMainBox>
                <MainText>
                    ┏───────────♡────────────┓ 
                </MainText>
                <MainText>
                    ┃*┌━┐┌━┐┌━┐┌━┐┌━┐┌━┐┌━┐*┃
                </MainText>
                <MainText>
                   ┃*│ │* 사    랑    한    ㄷr*│ │*┃
                </MainText>
                <MainText>
                    ┃*││ㅇ││4││9││기││ㅇ││*┃
                </MainText>
                <MainText>
                    ┃*└━┘└━┘└━┘└━┘└━┘└━┘└━┘*┃
                </MainText>
                <MainText>
                     ┗──────○○○○○○○○○○○───────┛
                </MainText>

                <Encase>
                    <MainButton onClick={gotoBack}>
                        <MainButtonText>
                            뒤로가기
                        </MainButtonText>
                    </MainButton>
                </Encase>
            </LayoutMainBox>
        </LoveMain>
  )
}
