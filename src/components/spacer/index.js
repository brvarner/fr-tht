import React from "react";
import { SpacerDiv } from "./styles/spacer";

export default function Spacer({ background, children, ...restProps }) {
  return (
    <SpacerDiv {...restProps} background={background}>
      {children}
    </SpacerDiv>
  );
}
