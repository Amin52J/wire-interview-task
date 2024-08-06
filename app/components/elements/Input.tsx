import styled, { css } from "styled-components";

const Input = styled.input(
  ({ theme }) => css`
    display: block;
    width: 100%;
    box-shadow: 0 0 1px ${theme.colors.shadow};
    font-size: ${theme.typography.largeFontSize}px;
    font-weight: 400;
    margin-bottom: ${theme.spacing}px;
    padding: ${theme.spacing * 1.2}px ${theme.spacing}px;
    outline: none;
    color: ${theme.colors.text};
    appearance: textfield;

    &::placeholder {
      color: ${theme.colors.darkShadow};
      font-style: italic;
    }
  `,
);

export default Input;
