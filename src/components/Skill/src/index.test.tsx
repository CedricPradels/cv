import { Skill } from "@components/Skill";
import { render } from "@utils/customRender";

describe(Skill.name, () => {
  it("should render a label", () => {
    const label1 = "foo";
    const { queryByText, rerender } = render(
      <Skill label={label1} rating={1} logo={""} />
    );

    expect(queryByText(label1)).toBeInTheDocument();

    const label2 = "bar";
    rerender(<Skill label={label2} rating={1} logo={""} />);

    expect(queryByText(label2)).toBeInTheDocument();
  });
});
