import React from "react";
import { render } from "@utils/customRender";
import { Layout } from ".";

it("Init test", () => {
  const { baseElement } = render(<Layout />);
  expect(baseElement).toBeInTheDocument();
});
