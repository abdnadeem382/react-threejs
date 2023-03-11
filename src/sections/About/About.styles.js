import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

export const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Line = styled.div`
  width: 30px;
  height: 5px;
  background-color: #8b8383;
  border-radius: 999px;
`;

export const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

export const Button = styled.button`
  border: none;
  background-color: #da4ea2;
  color: #fff;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 56px;
  }
`;

export const Subtitle = styled.h2`
  color: #da4ea2;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
