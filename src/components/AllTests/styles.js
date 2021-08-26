import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Link } from "gatsby"
export const Wrapper = styled.div`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 60px;
    }
  }
`
export const Card = styled(Link)`
  background: white;
  border-radius: 10px;
  > img {
    max-width: 100%;
  }
  > div {
    text-align: center;
    padding: 20px;
    margin: 0px;
    > h3,
    p {
      margin: 5px 0px 0px 0px;
    }
  }
`
