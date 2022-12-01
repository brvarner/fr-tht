import styled from "styled-components/macro";

export const SpacerDiv = styled.div`
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({ background }) => background});
`;
