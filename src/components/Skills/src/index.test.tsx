import { Skills } from "@components/Skills";
import { render } from "@utils/customRender";

describe(Skills.name, () => {
  it("should have a title", () => {
    const { queryByText } = render(<Skills />);

    expect(queryByText("Compétences")).toBeInTheDocument();
  });
});
