import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
  margin-top: 240px;
  text-align: center;
  > div#text {
    text-align: left;
    width: 500px;
    margin: auto;
    > h1,
    h2 {
      margin: 0px;
    }
    > h2 {
      margin-bottom: 80px;
    }
  }
`
