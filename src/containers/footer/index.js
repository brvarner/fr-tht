import React from "react";
import { Footer } from "../../components";

export default function FooterContainer({ props }) {
  return (
    <Footer>
      <Footer.IconContainer>
        <a
          href="https://www.linkedin.com/in/brandonvarneral/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/linkedin.png"
            alt="LinkedIn logo employed as a link to my LinkedIn page."
          />
        </a>
        <a href="https://github.com/brvarner" target="_blank" rel="noreferrer">
          <img
            src="./images/github.png"
            alt="GitHub logo employed as a link to my GitHub profile."
            style={{ height: "48px", width: "48px" }}
          />
        </a>
        <a href="https://bvarner.dev/" target="_blank" rel="noreferrer">
          <img
            src="./images/globe.png"
            alt="Globe employed as a link to my portfolio."
            style={{ height: "48px", width: "48px" }}
          />
        </a>
      </Footer.IconContainer>
    </Footer>
  );
}
