import { Experiences } from "@components/Experiences";
import { render } from "@utils/customRender";

describe(Experiences.name, () => {
  it("should render a title", () => {
    const { getByText } = render(<Experiences />);

    expect(getByText("Expériences")).toBeInTheDocument();
  });
});
