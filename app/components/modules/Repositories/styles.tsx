import { ThHTMLAttributes } from "react";
import styled, { css } from "styled-components";

import { LinkStyles } from "@Components/elements/Link";

import { initialSortMethod } from "./constants";

export const SearchResult = styled.section(
  ({ theme }) => css`
    display: block;
    box-shadow: 0 0 1px ${theme.colors.shadow};
    border-radius: 2px;
    margin-bottom: ${theme.spacing * 5}px;
    padding: ${theme.spacing}px ${theme.spacing}px 0;
  `,
);

export const Table = styled.table(
  ({ theme }) => css`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;

    tbody {
      tr {
        &:nth-child(even) {
          background: ${theme.colors.lightShadow};
        }

        td {
          padding: 5px;
        }
      }
    }
  `,
);

interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  title: string;
  sortMethod: typeof initialSortMethod;
}

export const TableHead = styled(
  ({ title, sortMethod, ...props }: TableHeadProps) => (
    <th {...props}>
      {`${title} `}
      {sortMethod.method === title.toLowerCase() &&
        (sortMethod.direction === "desc" ? (
          <span>&darr;</span>
        ) : (
          <span>&uarr;</span>
        ))}
    </th>
  ),
)(
  ({ theme }) => css`
    ${LinkStyles};
    width: 30%;
    text-align: left;
    border-bottom: 1px solid ${theme.colors.lightShadow};
    padding: ${theme.spacing / 2}px 0 ${theme.spacing * 1.5}px;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      width: 70%;
    }
  `,
);

export const Alert = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.spacing * 2}px;
    padding: ${theme.spacing * 2}px 0 ${theme.spacing * 5}px;
    text-align: center;
  `,
);

const activePaginationItemStyles = css`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: underline;
`;

export const Pagination = styled.ul(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  `,
);

export const PaginationItem = styled.li<{ $isActive: boolean }>(
  ({ theme, $isActive }) => css`
    width: 40px;
    height: 40px;
    text-align: center;
    font-weight: bold;

    ${$isActive
      ? activePaginationItemStyles
      : css`
          &:hover {
            cursor: pointer;
            ${activePaginationItemStyles};
          }
        `}
  `,
);
