import styled, { css } from "styled-components";
import { TextProps } from "./type";

export const Wrapper = styled.div<TextProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  gap: 0.5ex;
  overflow-wrap: ${({ overflowWrap }) => overflowWrap ?? "break-word"};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: max(${fontSize}, 18px);
    `}
  color: ${({ color, theme }) => color ?? theme.colors.fontColor};
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `}
`;
