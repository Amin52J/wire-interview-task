import { HTMLAttributes } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";

import { LinkStyles } from "@Components/elements/Link";
import Container from "@Components/elements/Container";

export const Wrapper = styled.header(
  ({ theme }) => css`
    background: ${theme.colors.header};
    padding: ${theme.spacing}px 0;
    min-height: 180px;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      min-height: auto;
      padding: ${theme.spacing}px ${theme.spacing}px 0;
    }
  `,
);

export const HeaderContainer = styled(Container)(
  ({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      flex-direction: column-reverse;
    }
  `,
);

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled((props: HTMLAttributes<HTMLAnchorElement>) => (
  <a {...props} href="/">
    <Image
      src="bower-logo.svg"
      alt="Bower Logo"
      width={0}
      height={0}
      sizes="100vw"
    />
  </a>
))(
  ({ theme }) => css`
    margin-top: ${theme.spacing * 1.5}px;
    margin-left: ${theme.spacing * 3}px;
    display: inline-block;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      margin: 0;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    img {
      width: 140px;
      height: auto;
      transition: transform 0.2s;

      @media screen and (max-width: ${theme.breakpoints.mobile}px) {
        width: 40px;
        display: block;
      }
    }
  `,
);

export const Title = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.typography.fontSize * 4}px;
    font-weight: bold;
    letter-spacing: -0.025em;
    line-height: 1.5;
    color: ${theme.colors.text};
    padding-top: ${theme.spacing * 2}px;
    padding-left: ${theme.spacing * 6}px;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      font-size: ${theme.typography.fontSize * 2}px;
      padding: 7px 0 5px 5px;
    }
  `,
);

export const Subtitle = styled.h4(
  ({ theme }) => css`
    font-size: 1.2em;
    font-weight: bold;
    color: ${theme.colors.text};
    padding-left: ${theme.spacing * 6}px;
    margin-left: 3px;
    margin-top: -${theme.spacing * 2}px;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      display: none;
    }
  `,
);

export const Navigation = styled.nav(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      position: relative;
      width: 100%;
      justify-content: space-around;
      border-bottom: 1px solid ${theme.colors.darkPrimary};
      padding-bottom: ${theme.spacing * 1.2}px;
    }
  `,
);

export const NavigationItem = styled.a(
  ({ theme }) => css`
    ${LinkStyles};
    color: ${theme.colors.brightLink};
    padding: 0.2em ${theme.spacing * 1.5}px;
    border-radius: 4px;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      font-size: ${theme.typography.smallFontSize}px;
    }

    &:not(:first-child) {
      color: ${theme.colors.secondaryLink};
    }

    &:hover {
      text-decoration: none;
      background: ${theme.colors.background};
    }
  `,
);

export const Notification = styled.div(
  ({ theme }) => css`
    background: ${theme.colors.notificationBackground};
    color: ${theme.colors.lightText};
    padding: 4px;
    text-align: center;

    & > a {
      color: ${theme.colors.lightText};
      text-decoration: underline;
    }
  `,
);
