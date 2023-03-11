import styled from "styled-components";

export const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

export const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    margin-top: -30px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

export const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.65px #fff;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #fff;
    -webkit-text-stroke: 0px;
  }

  @media only screen and (min-width: 769px) {
    ::after {
      content: "${(props) => props.text}";
      position: absolute;
      top: 0;
      left: 0;
      color: pink;
      width: 0px;
      overflow: hidden;
      white-space: nowrap;
    }
    &:hover {
      ::after {
        animation: fillText 0.5s linear both;

        @keyframes fillText {
          to {
            width: 100%;
          }
        }
      }
    }
  }
`;
