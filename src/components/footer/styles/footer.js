import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  background-color: #0066ff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export const IconContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  height: 40%;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 700px) {
    width: 50%;
  }
`;
