import { Contacts } from "@components/Contacts";
import { render } from "@utils/customRender";

describe(Contacts.name, () => {
  it("should has an address anchor", () => {
    const { queryByText } = render(<Contacts />);

    expect(queryByText(new RegExp("12 rue du comté"))).toBeInTheDocument();
    expect(queryByText(new RegExp("78 660 Ablis"))).toBeInTheDocument();
    expect(
      queryByText(new RegExp("78 660 Ablis"))?.getAttribute("href")
    ).toMatch(new RegExp("geo:-?[0-9]+.[0-9]+,-?[0-9]+.[0-9]+"));
  });

  it("should has a github  anchor", () => {
    const { queryByText } = render(<Contacts />);

    expect(queryByText("CedricPradels")).toBeInTheDocument();
    expect(queryByText("CedricPradels")?.getAttribute("href")).toBe(
      "https://github.com/CedricPradels"
    );
  });
});
