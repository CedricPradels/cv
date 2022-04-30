import styled, { css } from "styled-components";
import { IconProps, RatingProps } from "./types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
`;

export const Rating = styled.div<RatingProps>`
  width: 1em;
  height: 1em;
  border-radius: 50%;

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
`;

export const Icon = styled.div<IconProps>`
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

export const RatingWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
