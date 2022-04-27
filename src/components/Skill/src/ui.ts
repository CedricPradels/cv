import styled, { css } from "styled-components";
import { IconProps, RatingProps } from "./types";

export const Container = styled.div`
  font-size: 1.8rem;
`;

export const Rating = styled.div<RatingProps>`
  width: 1em;
  display: inline-block;
  height: 1em;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 5px;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.primary10};
  `}

  ${({ theme, active }) =>
    active &&
    css`
      background-color: ${theme.colors.primary100};
    `}
`;

export const Label = styled.div`
  margin-right: 8px;
  display: inline-block;
`;

export const Icon = styled.div<IconProps>`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 8px;

  ${({ url }) => css`
    background-image: url(${url});
  `}
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
