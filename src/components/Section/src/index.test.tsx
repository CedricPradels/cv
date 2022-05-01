import { Section } from "@components/Section";
import { Title } from "@components/Title";
import { render } from "@utils/customRender";

describe(Section.name, () => {
  it("should render a heading", () => {
    const { queryByTestId } = render(<Section title="lorem ipsum" />);

    expect(queryByTestId(Title.name)).toHaveTextContent("lorem ipsum");
  });

  it("should render a children", () => {
    const { queryByTestId } = render(
      <Section title="lorem">
        <div data-testid="iamachildren"></div>
      </Section>
    );

    expect(queryByTestId("iamachildren")).toBeInTheDocument();
  });

  it("should has testid", () => {
    const { queryByTestId } = render(<Section title="lorem ipsum" />);

    expect(queryByTestId(Section.name)).toBeInTheDocument();
  });
});
