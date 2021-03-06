import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import AirJordanImg from "../../images/netflix.png";
import { ShoesDetails } from "./shoesDetails1";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #37beb0;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const NikeText = styled.h1`
  color: #e50914;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 55px;
  font-weight: 900;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  /* margin-right: 3em; */
  /* margin-top: 4em; */

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

export function NikeCard(props) {
  return (
    <CardWrapper>
      <CardContainer>
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ShoesWrapper>
            <Shoes>
              <img src={AirJordanImg} />
            </Shoes>
          </ShoesWrapper>
          <NikeText>NETFLIX</NikeText>
        </TopContainer>
        <BottomContainer>
          <ShoesDetails />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}
