import React from "react";
import styled from "@emotion/styled";
import{useRouter} from 'next/router'
import { HomeButton, SignUpButton, UserButton } from "../atoms/buttons/NavAreaButton";



const Nav = () => {

    return (
        <>
            <NavContainer>
                <ButtonDiv>
                    <HomeButton />
                </ButtonDiv>
                <ButtonDiv>
                    <UserButton />
                    <SignUpButton />
                </ButtonDiv>
            </NavContainer>
        </>
    )
}

export default Nav

const NavContainer = styled.div`
    height:3vh;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    padding: 8px;
    background-color:black;
`

const ButtonDiv = styled.div`
    border:2px; solid red;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: center;
`