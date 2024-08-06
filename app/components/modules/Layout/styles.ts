import styled, { css } from "styled-components";
import Container from "@Components/elements/Container";

export const Page = styled.main(
  ({ theme }) => css`
    color: ${theme.colors.text};
    background: ${theme.colors.background};
    padding-top: ${theme.spacing * 2}px;
  `,
);

export const Side = styled.section<{ $isMenuVisible: boolean }>(
  ({ theme, $isMenuVisible }) => css`
    width: 200px;
    display: block;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      ${!$isMenuVisible
        ? css`
            display: none;
          `
        : css`
            display: block;
          `}
      width: 100%;
    }
  `,
);

export const Main = styled.main(
  ({ theme }) => css`
    margin-left: ${theme.spacing * 3}px;
    flex: 1;
    padding-bottom: ${theme.spacing * 4}px;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      margin-left: 0;
    }
  `,
);

export const MainContainer = styled(Container)(
  ({ theme }) => css`
    padding: 0 ${theme.spacing}px;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      display: flex;
      flex-direction: column;
    }
  `,
);

export const MenuButton = styled.button(
  ({ theme }) => css`
    display: none;
    width: 250px;
    height: 45px;
    border: 1px solid ${theme.colors.shadow};
    border-radius: 2px;
    line-height: 45px;
    text-align: center;
    background: ${theme.colors.background};
    outline: none;
    margin: 0 auto ${theme.spacing * 2}px;
    color: ${theme.colors.brightLink};
    font-size: ${theme.typography.largeFontSize}px;
    font-weight: bold;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      display: block;
    }
  `,
);
