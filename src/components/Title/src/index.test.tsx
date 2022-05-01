import { render } from "@utils/customRender";
import { Title } from "@components/Title";

describe(Title.name, () => {
  it("should render a heading", () => {
    const { queryByRole } = render(<Title level="1">Foo</Title>);

    expect(queryByRole("heading")).toBeInTheDocument();
  });

  it("should render his children", () => {
    const { queryByText } = render(<Title level="1">Foo</Title>);

    expect(queryByText("Foo")).toBeInTheDocument();
  });

  it("should adapt heading level", () => {
    const { queryByRole, rerender } = render(<Title level="1">Foo</Title>);

    expect(queryByRole("heading", { level: 1 })).toBeInTheDocument();

    rerender(<Title level="2">Foo</Title>);

    expect(queryByRole("heading", { level: 2 })).toBeInTheDocument();

    rerender(<Title level="3">Foo</Title>);

    expect(queryByRole("heading", { level: 3 })).toBeInTheDocument();
  });
});
