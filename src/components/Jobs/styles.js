import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px 50px;
  @media screen and (min-width: 768px) {
    width: 800px;
  }
  text-align: center;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    width: 100px;
    @media screen and (min-width: 768px) {
      width: 400px;
    }
  }
`
