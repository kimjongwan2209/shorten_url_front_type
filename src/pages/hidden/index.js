import React from 'react'
import { useRouter } from 'next/router';
import { LayoutMainBox, ButtonText,Encase, Button} from '../../styles/main'
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
                    <Button onClick={gotoBack}>
                        <ButtonText>
                            뒤로가기
                        </ButtonText>
                    </Button>
                </Encase>
            </LayoutMainBox>
        </LoveMain>
  )
}
