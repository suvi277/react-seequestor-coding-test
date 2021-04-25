import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-image: url(https://www.seequestor.com/wp-content/uploads/2020/09/Form-Background.svg);
    background-size: cover;
    overflow: hidden;
  }
  :root {
    font-size: ${px2vw(24)};
    color: #ffffff;
    letter-spacing: 1px;
    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }
    @media (min-width: 1024px) { 
      font-size: ${px2vw(16)};
    }
  }
  .heading {
    text-align: center;
    margin: 20px 0;
  }
`;

export default Global;