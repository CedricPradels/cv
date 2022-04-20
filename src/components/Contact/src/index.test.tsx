import { Contact } from "@components/Contact";
import { render } from "@utils/customRender";

describe(Contact.name, () => {
  it("should render a label", () => {
    const { queryByText } = render(<Contact />);

    expect(queryByText("Contact")).toBeInTheDocument();
  });
});
