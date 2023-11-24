import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { MainContainer, UrlText } from '../../styles/main';
import { useRandomBackgroundColor } from '../../utils/BackgroundRandomColor';
import Input from '../../atoms/inputs/mainURLinput';
import store from '../../store';
import { InputSpan, Inputdiv } from '../../styles/sign';
import { MainButton } from '../../styles/button';
import signUpApi from '../../apis/signUpApi';

const SignUp = observer(() => {
  const backgroundColor = useRandomBackgroundColor();
  const { signStore } = store;

  const handleInputChange = (inputName: string, value: string) => {
    console.log(value)
    switch (inputName) {
      case 'nickName':
        signStore.setNickName(value);
        break;
      case 'password':
        signStore.setPassword(value);
        break;
      case 'email':
        signStore.setEmail(value);
        break;
      case 'phone':
        signStore.setPhone(value);
        break;
      default:
        break;
    }
  };

  
  const handleSignUp = async () => {
    await signUpApi();
  };

  return (
    <MainContainer backgroundColor={backgroundColor}>
      <UrlText>회원가입</UrlText>
      <Inputdiv>
        <InputSpan>NickName</InputSpan>
        <Input
          type="text"
          value={signStore.nickName}
          onChange={(e) =>
            handleInputChange('nickName', e.target.value)}
        />
      </Inputdiv>
      <Inputdiv>
        <InputSpan>Password</InputSpan>
        <Input
          type="password"
          value={signStore.password}
          onChange={(e) => 
            handleInputChange('password', e.target.value)
          }
        />
      </Inputdiv>
      <Inputdiv>
        <InputSpan>Email</InputSpan>
        <Input
          type="text"
          value={signStore.email}
          onChange={(e) =>
            handleInputChange('email', e.target.value)
          }
        />
      </Inputdiv>
      <Inputdiv>
        <InputSpan>Phone</InputSpan>
        <Input
          type="text"
          value={signStore.phone}
          onChange={(e) =>
            handleInputChange('phone', e.target.value)
          }
        />
      </Inputdiv>
      <MainButton onClick={handleSignUp}>가입하기</MainButton>
    </MainContainer>
  );
});

export default SignUp;