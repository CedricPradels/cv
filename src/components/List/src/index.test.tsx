import { render } from "@utils/customRender";
import { List } from "@components/List";

describe(List.name, () => {
  it("should render items", () => {
    const { queryByText, queryAllByRole } = render(
      <List items={["Foo", "Bar"]} />
    );

    expect(queryAllByRole("listitem").length).toBe(2);
    expect(queryByText("Foo")).toBeInTheDocument();
    expect(queryByText("Bar")).toBeInTheDocument();
  });
});
