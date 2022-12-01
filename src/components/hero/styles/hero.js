import styled from "styled-components/macro";
import "@fontsource/merriweather";

export const HeroContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: #f7770f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 85px;
  font-family: Merriweather, serif;

  @media (max-width: 700px) {
    font-size: 45px;
  }
`;

export const SmallText = styled.p`
  font-size: 15px;
  font-family: Merriweather, serif;
`;
