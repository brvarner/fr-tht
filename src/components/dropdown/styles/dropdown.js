import styled from "styled-components/macro";

export const DropdownBase = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 4;
`;

export const Header = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  background: #fff;
`;

export const Container = styled.div`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  line-height: 50px;
  padding: 5px 20px;
  z-index: -1;
  margin-bottom: 20px;
  overflow: auto;
  max-height: 200px;
  &: last-of-type {
    margin-bottom: 30px;
  }
`;

export const Item = styled.div`
  padding: 10px;
  transition: all 0.2s;
  color: black;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
  }
`;

export const Icon = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 5px;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 10px;
  }
`;
