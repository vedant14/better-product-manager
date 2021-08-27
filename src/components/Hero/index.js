import React from "react";
import { Wrapper } from "./styles";
import { Link } from "gatsby";
import LeftArrow from "../../images/icons/leftarrow.png";
import CircleArrow from "../../images/icons/circlearrow.png";
export function Hero() {
  return (
    <Wrapper className="Container">
      <h1>
        The most fun way to become a <br />
        <span className="bold">better product manager</span>
      </h1>
    </Wrapper>
  );
}
