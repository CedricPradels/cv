import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary100};
    color: ${theme.colors.neutral5};
    padding: 16px 0;
  `}
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 56px;
  font-size: 1.8rem;
`;

export const Item = styled.li``;
