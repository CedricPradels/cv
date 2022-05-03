import { Other } from "@components/Other";
import { render } from "@utils/customRender";
import { data } from "./data";

describe(Other.name, () => {
  it("should render a label", () => {
    const { queryByText } = render(<Other />);

    expect(queryByText("Autre")).toBeInTheDocument();
  });

  it("should render categories titles", () => {
    const { queryByText } = render(<Other />);

    data.forEach(({ title }) => {
      expect(queryByText(title)).toBeInTheDocument();
    });
  });

  it("should render categories items", () => {
    const { queryByText } = render(<Other />);

    data.forEach(({ items }) => {
      items.forEach((item) => {
        expect(queryByText(item)).toBeInTheDocument();
      });
    });
  });
});
