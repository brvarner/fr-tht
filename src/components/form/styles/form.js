import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 30px;
  &: last-of-type {
    margin-bottom: 40px;
  }
`;

export const Submit = styled.button`
  background: #0ef777;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0px 12px;
  padding: 16px;
  border: 0;
  color: black;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

export const Feedback = styled.p`
  line-height: 1px;
  margin-vertical: 5px;
  display: flex;
  color: ${({ feedback }) => (feedback > 2 ? "green" : "red")};
  display: ${({ feedback }) => (feedback ? "inline-block" : "none")};
`;
