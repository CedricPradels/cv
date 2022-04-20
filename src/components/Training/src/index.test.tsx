import { Training } from "@components/Training";
import { render } from "@utils/customRender";

describe(Training.name, () => {
  it("should have a title", () => {
    const { queryByText } = render(<Training />);

    expect(queryByText("Formations")).toBeInTheDocument();
  });
});
