import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
  margin-top: 100px;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "number score"
    "question question";
  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 8fr 2fr;
    grid-template-areas: "number question score";
  }
  .incorrect-answer {
    background: red;
    color: white;
  }
  .correct-answer {
    background: green;
    color: white;
  }
  .next-button {
    margin: 30px auto;
  }

  .content {
    background: white;
    border-radius: 4px;
    padding: 30px 10px;
    margin: 20px auto;
  }
  button:disabled {
    border: none;
  }
  > div#number {
    text-align: left;
    grid-area: number;
  }
  > div#question {
    text-align: center;
    grid-area: question;
  }
  > div#score {
    text-align: right;
    grid-area: score;
  }
`
