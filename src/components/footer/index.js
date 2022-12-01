import React from "react";
import { FooterContainer, IconContainer } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <FooterContainer {...restProps}>{children}</FooterContainer>;
}

Footer.IconContainer = function FooterIconContainer({
  children,
  ...restProps
}) {
  return <IconContainer {...restProps}>{children}</IconContainer>;
};
