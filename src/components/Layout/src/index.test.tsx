import { render } from "@utils/customRender";
import { Layout } from "@components/Layout";

describe(Layout.name, () => {
  it("Render children", () => {
    const children = "Hello world";
    const { queryByText } = render(<Layout>{children}</Layout>);
    expect(queryByText(children)).not.toBeNull();
  });
});
