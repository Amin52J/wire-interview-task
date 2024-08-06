import styled, { css } from "styled-components";

import Link from "@Components/elements/Link";

export const Navigation = styled.nav(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacing * 2}px;
  `,
);

export const NavigationItem = styled(Link)(
  ({ theme }) => css`
    display: block;
    padding: 0.2em 0;
    color: ${theme.colors.brightLink};
    font-size: ${theme.typography.mediumFontSize}px;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      padding: calc(0.4em + 5px) 0;
      border-bottom: 1px solid ${theme.colors.lightShadow};
      text-align: center;
    }
  `,
);
