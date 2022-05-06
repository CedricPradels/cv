import styled, { css } from "styled-components";
import { IconProps } from "./types";

export const Container = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary100};
    color: ${theme.colors.neutral5};
    padding: 16px 0;
  `}
`;

export const Icon = styled.i<IconProps>`
  height: 3rem;
  width: 3rem;
  color: inherit;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 16px;

  ${({ src }) => css`
    background-image: url(${src});
  `}
`;
