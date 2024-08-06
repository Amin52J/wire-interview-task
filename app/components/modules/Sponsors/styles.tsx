import { HTMLAttributes } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";

interface SponsorType extends HTMLAttributes<HTMLAnchorElement> {
  image: string;
  alt: string;
  href: string;
}

export const Sponsor = styled(({ image, alt, ...props }: SponsorType) => (
  <a {...props}>
    <Image width={0} height={0} src={image} alt={alt} sizes="100vw" />
  </a>
))(
  ({ theme }) => css`
    margin: ${theme.spacing / 2}px auto;
    display: block;

    img {
      display: block;
      width: 100%;
      height: auto;

      @media screen and (max-width: ${theme.breakpoints.mobile}px) {
        max-width: 200px;
        margin: 0 auto;
      }
    }
  `,
);

export const Title = styled.h5(
  ({ theme }) => css`
    margin: 0 0 ${theme.spacing}px 0;
    display: block;
    font-size: 0.83em;
    font-weight: bold;
    unicode-bidi: isolate;

    @media screen and (max-width: ${theme.breakpoints.mobile}px) {
      text-align: center;
    }
  `,
);
