import React, { useState } from "react"
import { Wrapper } from "./styles"
import { Link } from "gatsby"

export function New({ setSelectedRole, setSelectedAnswer }) {
  const [active, setActive] = useState(false)
  const handleAnswerOptionClick = answer => {
    setActive(answer)
    setSelectedRole(answer)
    setSelectedAnswer(null)
  }
  return (
    <Wrapper className="Container">
      <div id="text">
        <h1>Hi new human</h1>
        <h2>Are you...</h2>
      </div>
      <button
        className={active === "aspiring" ? "active" : ""}
        onClick={() => handleAnswerOptionClick("aspiring")}
      >
        An aspiring product manager
      </button>
      <button
        className={active === "experienced" ? "active" : ""}
        onClick={() => handleAnswerOptionClick("experienced")}
      >
        Working in a product team
      </button>
      {active === false && (
        <p>
          I am a regular, just show me the <Link to="/#tests">new tests</Link>
        </p>
      )}
    </Wrapper>
  )
}
