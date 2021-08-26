import React from "react"
import { Card } from "./styles"
export function ImposterCard() {
  return (
    <Card>
      <h2>Imposter Syndrome</h2>
      <p>
        <i>noun</i>
      </p>
      <ol>
        <li>
          When you think you are a bad product manager because you have less
          business vision than the CEO
        </li>
        <li>
          When you think you are a bad product manager because you have less
          design acumen than the designer on your team
        </li>
        <li>
          When you think you are a bad product manager because you know less
          tech terms than the software developers on your team
        </li>
        <li>
          When you think you are a bad product manager because even when you
          planned everything, things still got delayed.
        </li>
      </ol>
      <small>Fake but true</small>
    </Card>
  )
}
