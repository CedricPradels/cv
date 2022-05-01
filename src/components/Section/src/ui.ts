import styled, { css } from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.section<ContainerProps>`
  position: relative;

  ${({ theme, withBackground }) =>
    withBackground &&
    css`
      color: ${theme.colors.neutral5};

      &:before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        width: calc(100% - 33% / 2 + 56px);
        height: 100%;
        background-color: ${theme.colors.primary100};
        border-radius: 20px 0 0 20px;
      }
    `}
`;

export const Content = styled.div`
  width: max(66%, 500px);
  font-size: 1.8rem;
  padding: 96px 0;
  margin: 0 auto;
  position: relative;
`;
