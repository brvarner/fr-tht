import React from "react";
import { HeroContainer, Title, SmallText } from "./styles/hero";

export default function Hero({ children, ...restProps }) {
  return <HeroContainer {...restProps}>{children}</HeroContainer>;
}

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.SmallText = function HeroSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};
