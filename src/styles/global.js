import { css } from "@emotion/react";
import { colors } from "./colors";
import { font } from "./typography";

export const global = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: ${font.primary};
    color: ${colors.black};
    font-size: 1rem;
  }
`;
