import styled, { css } from "styled-components";

const Container = styled.div(
  ({ theme }) => css`
    width: ${theme.sizes.pageWidth};
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: relative;
  `,
);

export default Container;
