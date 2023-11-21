import React from 'react'
import { useRouter } from 'next/router';
import { LayoutMainBox, Encase } from '../../styles/main'
import { MainButton, MainButtonText } from '../../styles/button';
import { LoveMain, MainText } from '@/src/styles/hidden';
export default function Url() {
    const router = useRouter();

    const gotoBack = () => {
        router.back();
    }

    return (
        <LoveMain>
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
                    ┃*│w││e││c││o││d││e││.│*┃
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
