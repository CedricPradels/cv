import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
`;

export const Footer = styled.footer`
  position: sticky;
  bottom: 0;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
`;
