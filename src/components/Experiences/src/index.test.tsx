import { Experiences } from "@components/Experiences";
import { render } from "@utils/customRender";

describe(Experiences.name, () => {
  it("should render a title", () => {
    const { queryByText } = render(<Experiences />);

    expect(queryByText("Expériences")).toBeInTheDocument();
  });
});
