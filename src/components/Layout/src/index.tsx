import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { theme } from "@design-system/theme";
import { GlobalStyles } from "@design-system/globalStyles";

export const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
