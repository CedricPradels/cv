import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

export const Container = styled.div`
  position: relative;
  background-image: url("/img/processor.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 72px 0;

  ${({ theme }) => css`
    color: ${theme.colors.neutral5};
  `}

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ theme }) => css`
      background-color: ${theme.colors.neutral110};
      opacity: 0.8;
    `}
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  padding: 16px 24px 16px 48px;
  border-radius: 0 8px 8px 0;
  font-size: 21px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary100};
    color: ${theme.colors.neutral5};
  `}
`;

export const Description = styled.div`
  max-width: 470px;
  font-size: 18px;
  margin-bottom: 52px;
`;

export const Title = styled.div`
  margin-bottom: 36px;
  font-size: 55px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.a<ButtonProps>`
  padding: 16px 32px;
  font-size: 18px;
  border-radius: 8px;
  text-decoration: none;

  ${({ theme }) => css`
    color: ${theme.colors.neutral5};
    background-color: ${theme.colors.primary100};
  `}

  ${({ secondary }) =>
    secondary &&
    css`
      ${({ theme }) => css`
        color: ${theme.colors.neutral110};
        background-color: ${theme.colors.neutral5};
        border: 1px ${theme.colors.primary100} solid;
      `}
    `}
`;

export const Illustration = styled.div`
  background-image: url("/img/illustration.png");
  background-size: cover;
  background-repeat: no-repeat;
  flex: 1;
  max-height: 250px;
  max-width: 250px;
`;

export const Wrapper = styled.div``;
