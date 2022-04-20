import { Contact } from "@components/Contact";
import { render } from "@utils/customRender";

describe(Contact.name, () => {
  it("should render a label", () => {
    const { getByText } = render(<Contact />);

    expect(getByText("Contact")).toBeInTheDocument();
  });
});
