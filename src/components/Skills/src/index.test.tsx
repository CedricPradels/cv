import { Skill } from "@components/Skill";
import { Skills } from "@components/Skills";
import { render } from "@utils/customRender";
import { skills } from "@components/Skills/src/data";

describe(Skills.name, () => {
  it("should have a title", () => {
    const { queryByRole } = render(<Skills />);

    expect(queryByRole("heading")).toHaveTextContent("Compétences");
  });

  it("should render skills", () => {
    const { getAllByTestId } = render(<Skills />);

    expect(getAllByTestId(Skill.name)).toHaveLength(skills.length);
  });
});
