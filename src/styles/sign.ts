import styled from "@emotion/styled";

export const Inputdiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin: 5px;
`

export const InputSpan = styled.span`
    font-size:20px;
    font-weight: 800;
    color: white;
    text-shadow: -2px 0px black, 0px 2px black, 2px 0px black, 0px -2px black;
    padding: 5px;
`

export const ErrorMessage = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 300;
  text-shadow: -1px 0px red, 0px 1px red, 1px 0px red, 0px -1px red;
  margin-top: 4px;
`;