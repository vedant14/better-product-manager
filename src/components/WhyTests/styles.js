import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  position: relative;
  color: ${colors.primaryBlack};
  > h4 {
    margin-top: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 200px;
    height: 1000px;
    > h4 {
      margin-top: 100px;
    }
  }
`;

export const Card = styled.div`
  background: ${colors.brandYellow};
  padding: 80px 20px;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  > h4 {
    font-weight: 300;
    line-height: 22px;
  }
  position: relative;
  margin: 20px auto;
  @media screen and (min-width: 768px) {
    position: absolute;

    &#first {
      top: 30%;
      left: 5%;
      transform: rotate(-3deg);
    }
    &#second {
      top: 35%;
      right: 15%;
      transform: rotate(2deg);
    }
    &#third {
      top: 70%;
      left: 20%;
      transform: rotate(1deg);
    }
    &#fourth {
      top: 75%;
      right: 15%;
      transform: rotate(-2deg);
    }
  }
`;
