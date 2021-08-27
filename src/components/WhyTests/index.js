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
        <h4>Fun but thought provoking. kind off.</h4>
      </Card>
      <Card id="second">
        <h4>Fun but thought provoking. kind off.</h4>
      </Card>
      <Card id="third">
        <h4>Fun but thought provoking. kind off.</h4>
      </Card>
      <Card id="fourth">
        <h4>Fun but thought provoking. kind off.</h4>
      </Card>
    </Wrapper>
  );
}
