import React from "react"
import { Card } from "./styles"
import JobsImage from "../../images/steve.png"
export function Jobs() {
  return (
    <Card>
      <h2>Being a Product Manager </h2>
      <h2>=</h2>
      <img src={JobsImage} alt="Steve Jobs" />
    </Card>
  )
}
