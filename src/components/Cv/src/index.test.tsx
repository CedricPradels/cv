import { Contact } from "@components/Contact";
import { Cv } from "@components/Cv";
import { Experiences } from "@components/Experiences";
import { Introduction } from "@components/Introduction";
import { Other } from "@components/Other";
import { Skills } from "@components/Skills";
import { Training } from "@components/Training";
import { render } from "@utils/customRender";

describe(Cv.name, () => {
  it("should render the introduction", () => {
    const { queryByTestId } = render(<Cv />);

    expect(queryByTestId(Introduction.name)).toBeInTheDocument();
  });

  it("should render the contact", () => {
    const { queryByTestId } = render(<Cv />);

    expect(queryByTestId(Contact.name)).toBeInTheDocument();
  });

  it("should render the experiences", () => {
    const { queryByTestId } = render(<Cv />);

    expect(queryByTestId(Experiences.name)).toBeInTheDocument();
  });

  it("should render the other", () => {
    const { queryByTestId } = render(<Cv />);

    expect(queryByTestId(Other.name)).toBeInTheDocument();
  });

  it("should render the skills", () => {
    const { queryByTestId } = render(<Cv />);

    expect(queryByTestId(Skills.name)).toBeInTheDocument();
  });

  it("should render the training", () => {
    const { queryByTestId } = render(<Cv />);

    expect(queryByTestId(Training.name)).toBeInTheDocument();
  });
});
