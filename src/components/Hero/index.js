import React from "react"
import { Wrapper } from "./styles"
import { Link } from "gatsby"
import LeftArrow from "../../images/icons/leftarrow.png"
import CircleArrow from "../../images/icons/circlearrow.png"
export function Hero() {
  return (
    <Wrapper className="Container">
      <div id="first">
        <h1>Hello Fellow Product Person :)</h1>
        <div id="start">
          <h4>
            <Link to="/start-here">New around here?</Link>
          </h4>
          <img src={LeftArrow} alt="Left Arrow" />
        </div>
      </div>
      <div id="second">
        <div id="form">
          <iframe
            src="https://tally.so/embed/wg5Dlm?hideTitle=1&alignLeft=1&transparentBackground=1"
            height="500"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Subcribe"
          ></iframe>
        </div>
        <img src={CircleArrow} />
      </div>
    </Wrapper>
  )
}
