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

export const Footer = styled.div``;

export const Header = styled.div`
  position: relative;
  background-image: url("/img/processor.png");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(127, 127, 129, 0.85);
  }
`;

export const HeaderContent = styled.div`
  position: relative;
`;
