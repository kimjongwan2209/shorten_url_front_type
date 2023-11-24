import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { MainContainer, UrlText } from '../../styles/main';
import { useRandomBackgroundColor } from '../../utils/BackgroundRandomColor';
import Input from '../../atoms/inputs/mainURLinput';
import store from '../../store'
import { InputSpan, Inputdiv } from '../../styles/sign';
import { MainButton } from '../../styles/button';
import userApi from '../../apis/userApi'

const userLogin = () => {
    const backgroundColor = useRandomBackgroundColor();
    const [loginError, setLoginError] = useState(false);
    const { userStore } = store

    
    
    const handleLogin = async () => {
    const success = await userApi(userStore.email, userStore.password);

    if (!success) {
      setLoginError(true);
    }
  };

    return (
        <MainContainer backgroundColor={backgroundColor}>
            <UrlText>☆ 축 환영 ☆</UrlText>
            <Inputdiv>
                <InputSpan>Email</InputSpan>
                <Input
                    type="text"
                    value={userStore.email}
                    onChange={(e) => userStore.setEmail(e.target.value)}
                />
            </Inputdiv>
            <Inputdiv>
                <InputSpan>Password</InputSpan>
                <Input
                    type="password"
                    value={userStore.password}
                    onChange={(e) => userStore.setPassword(e.target.value)}
                />
            </Inputdiv>
            <MainButton onClick={handleLogin}>로그인</MainButton>
            {loginError && <p style={{ color: 'red' }}>로그인에 실패했습니다. </p>}
        </MainContainer>
    )
}

export default observer(userLogin)