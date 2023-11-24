import Head from 'next/head'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import UrlConfirmButton from '../../atoms/buttons/UrlConfirmButton';
import Input from '../../atoms/inputs/mainURLinput';
import { MainContainer, UrlText, Encase, LayoutMainBox } from '../../styles/main';
import { useRandomBackgroundColor } from '../../utils/BackgroundRandomColor';
import { HiddenButton } from '../../styles/button';
import { observer } from 'mobx-react';


const Main = () => {
  const router = useRouter();
  const [inputValue, setinputValue] = useState('');
  const backgroundColor = useRandomBackgroundColor();
  
  const gotoHidden = () => {
    router.push("/hidden")
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer backgroundColor={backgroundColor}>
        <HiddenButton onClick={gotoHidden} />
        <LayoutMainBox>
          <Encase>
            <UrlText>Free Shorten url 생성기</UrlText>
          </Encase>
          <Encase>
            <Input
              type='text'
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
            />
          </Encase>
          <UrlConfirmButton urlAddress={inputValue} />
        </LayoutMainBox>
      </MainContainer>
    </>
  );
};

export default observer(Main)