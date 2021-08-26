import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px 20px;
  @media screen and (min-width: 768px) {
    padding: 30px 50px;
    width: 800px;
  }

  text-align: left;
  margin: 40px auto;
`
