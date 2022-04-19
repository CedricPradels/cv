import React, { FC, ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { Layout } from "@components/Layout";

const AllTheProviders: FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
