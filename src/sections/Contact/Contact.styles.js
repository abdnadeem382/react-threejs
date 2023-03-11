import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

export const Button = styled.button`
  background-color: #da4ea2;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;
