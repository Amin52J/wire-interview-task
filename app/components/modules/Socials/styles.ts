import styled, { css } from "styled-components";

import Link from "@Components/elements/Link";

export const SocialsLink = styled(Link)(
  ({ theme }) => css`
    display: block;
    padding: 0.2em 0;
    font-weight: 400;
    font-size: ${theme.typography.smallFontSize}px;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      text-align: center;
      padding: 0.4em 0;
    }

    svg {
      width: 1.4em;
      height: 1.4em;
      fill: ${theme.colors.link};
      vertical-align: middle;
    }
  `,
);

export const SocialsWrapper = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing * 2}px;
  `,
);
