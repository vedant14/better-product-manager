import React from "react";
import { Wrapper } from "./styles";
import { Link } from "gatsby";
import LeftArrow from "../../images/icons/leftarrow.png";
import CircleArrow from "../../images/icons/circlearrow.png";
export function Hero({ text, boldText }) {
  if (text === undefined) {
    text = "Hero Text";
    boldText = "Bold Text";
  }
  console.log(text);
  return (
    <Wrapper className="Container">
      <h1>
        {text} <br />
        <span className="bold">{boldText}</span>
      </h1>
    </Wrapper>
  );
}
