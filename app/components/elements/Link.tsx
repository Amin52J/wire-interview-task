import styled, { css } from "styled-components";

export const LinkStyles = css`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.link};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

const Link = styled.a`
  ${LinkStyles}
`;

export default Link;
