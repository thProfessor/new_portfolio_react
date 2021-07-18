import React from "react";
import styled from "styled-components";




const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5em 6px 0 6px;

`;

const MediumText = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 18px;
`;

const SmallText = styled.span`
  font-size: 8px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 16px;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #37BEB0;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #37BEB0;
  }
`;
const move = ()=>{
  window.location.href='https://netflix-redesign-3e791.web.app/';
}
export function ShoesDetails(props) {
  return (
    <DetailsContainer>
      <MediumText>Netflix Redesign</MediumText>
      <SpacedHorizontalContainer>
        <SmallText>Redisgned Netflix using React hooks and Redux and hosted on Firebase. </SmallText>

      </SpacedHorizontalContainer>
     
      <SpacedHorizontalContainer>
        <SmallText>To Login use email- utkrs.sukla@gmail.com
password-123456.</SmallText>
        <BuyButton onClick={move}>EXPLORE</BuyButton>
      </SpacedHorizontalContainer>
    </DetailsContainer>
  );
}
