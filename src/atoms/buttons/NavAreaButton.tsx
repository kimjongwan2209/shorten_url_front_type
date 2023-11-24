import React from 'react'
import { NavButtonStyle } from '../../styles/button'
import { useRouter } from 'next/router'
import { ButtonProps } from '../../types/type'

export const SignUpButton: React.FC<ButtonProps> = ({ children }) => {
    const router = useRouter();

    const gotoSignUp = () => {
        router.push('/signup');
    }
    return (
        <NavButtonStyle onClick={gotoSignUp}>회원가입</NavButtonStyle>
    )
}

export const UserButton: React.FC<ButtonProps> = ({ children }) => {
    const router = useRouter();

    const gotoUser = () => {
        router.push('/user');
    }
    return (
        <NavButtonStyle onClick={gotoUser}>로그인</NavButtonStyle>
    )
}

export const HomeButton: React.FC<ButtonProps> = ({ children }) => {
    const router = useRouter();

    const gotoMain = () => {
        router.push('/main');
    }
    return (
        <NavButtonStyle onClick={gotoMain}>홈으로</NavButtonStyle>
    )
}

