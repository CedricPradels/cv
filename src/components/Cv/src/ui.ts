import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  width: max(66%, 500px);
  margin: 0 auto;
  display: flex;
  & > * {
    flex: 1;
  }
`;
