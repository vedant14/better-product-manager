import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 140px;
  margin-bottom: 140px;
  @media screen and (min-width: 768px) {
    margin-top: 240px;
    margin-bottom: 240px;
    grid-template-columns: 2fr 3fr;
  }
  grid-gap: 0px 50px;
  > div#first {
    margin-top: 50px;
    width: 300px;
    @media screen and (min-width: 768px) {
      width: 500px;
    }
    > div#start {
      position: relative;
      width: fit-content;
      > h4 {
        border-bottom: 3px solid #f2c94c;
      }
      > img {
        width: 60px;
        position: absolute;
        top: 0%;
        right: -60%;
      }
    }
  }
  > div#second {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
    position: relative;
    > img {
      position: absolute;
      width: 420px;
      top: -50%;
      right: 0%;
      z-index: 0;
    }
    > div {
      position: absolute;
      z-index: 100;
      margin-top: 50px;
      right: 0%;
      > h3,
      p {
        margin: 0;
      }
    }
  }
`
