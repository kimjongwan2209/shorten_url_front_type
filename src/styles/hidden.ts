import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import { Main } from "next/document";

export const LoveMain = styled.div`
    background: conic-gradient(red, orange, yellow, green, blue, indigo, violet, red);
    height: 90vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

export const MainText = styled.span`
    display:inline-block;
    font-size: 48px;
    font-weight:bold;
    color: black;
    text-shadow: -4px 0px yellow, 0px 4px yellow, 4px 0px yellow, 0px -4px yellow;
`