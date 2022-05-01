import styled from "styled-components";

export const Container = styled.ul`
  font-weight: 1.8rem;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:before {
    content: "›";
    padding-right: 8px;
  }
`;
