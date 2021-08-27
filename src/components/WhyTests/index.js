import React, { useState } from "react";
import { Wrapper, Card } from "./styles";
import { Link } from "gatsby";

export function WhyTests({ setSelectedRole, setSelectedAnswer }) {
  const [active, setActive] = useState(false);
  const handleAnswerOptionClick = (answer) => {
    setActive(answer);
    setSelectedRole(answer);
    setSelectedAnswer(null);
  };
  return (
    <Wrapper className="Container">
      <h2>
        A ever increasing collection of tests and quizes to help you become a
        better product manager
      </h2>
      <h4>What are these tests?</h4>
      <Card id="first">
        <h4>Designed to be fun. atleast I tried.</h4>
      </Card>
      <Card id="second">
        <h4>
          We have surveyed 100s of product managers to understand their
          challenges and created these tests
        </h4>
      </Card>
      <Card id="third">
        <h4>Zero Hype. All experience</h4>
      </Card>
      <Card id="fourth">
        <h4>
          Take a sneak peak into product management before taking the jump
        </h4>
      </Card>
    </Wrapper>
  );
}
