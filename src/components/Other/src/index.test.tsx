import { Other } from "@components/Other";
import { render } from "@utils/customRender";

describe(Other.name, () => {
  it("should render a label", () => {
    const { getByText } = render(<Other />);

    expect(getByText("Other")).toBeInTheDocument();
  });
});
