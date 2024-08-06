import styled, { css } from "styled-components";
import { LinkStyles } from "@Components/elements/Link";

export const FooterContainer = styled.footer(
  ({ theme }) => css`
    padding-top: ${theme.spacing}px;
    border-top: 1px solid ${theme.colors.mediumLightShadow};
    margin-top: ${theme.spacing * 4}px;
    font-size: ${theme.typography.footerFontSize};

    p {
      margin: 1em 0;
    }
  `,
);

export const FooterLink = styled.a`
  ${LinkStyles};
  font-weight: 400;
  white-space: nowrap;
`;
