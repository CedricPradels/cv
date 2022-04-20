import { Training } from "@components/Training";
import { render } from "@utils/customRender";

describe(Training.name, () => {
  it("should have a title", () => {
    const { getByText } = render(<Training />);

    expect(getByText("Formations")).toBeInTheDocument();
  });
});
