import React from "react";
import { Hero } from "../../components";

export default function HeroContainer({ props }) {
  return (
    <Hero>
      <Hero.Title>Welcome!</Hero.Title>
      <Hero.SmallText>This site contains a form that meets all requirements. Visit the footer below for important links!</Hero.SmallText>
    </Hero>
  );
}
