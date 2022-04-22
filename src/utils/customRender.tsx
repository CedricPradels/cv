import { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { Layout } from "@components/Layout";

const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: Layout, ...options });

export * from "@testing-library/react";

export { customRender as render };
