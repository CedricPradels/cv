import { Other } from "@components/Other";
import { render } from "@utils/customRender";

describe(Other.name, () => {
  it("should render a label", () => {
    const { queryByText } = render(<Other />);

    expect(queryByText("Other")).toBeInTheDocument();
  });
});
