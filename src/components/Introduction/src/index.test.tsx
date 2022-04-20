import { Introduction } from "@components/Introduction";
import { render } from "@utils/customRender";
import { data } from "./data";

describe(Introduction.name, () => {
  it("should render my name", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.name)).toBeInTheDocument();
  });

  it("should render my description", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.description)).toBeInTheDocument();
  });

  it("should render a title", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.title)).toBeInTheDocument();
  });

  it("should render an email", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.email)).toBeInTheDocument();
  });

  it("should email be an anchor tag", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.email).tagName).toBe("A");
  });

  it("should email anchor have href", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.email).getAttribute("href")).toBe(
      "mailto:cedric.pradels@gmail.com"
    );
  });

  it("should render an phone", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.phone)).toBeInTheDocument();
  });

  it("should phone be an anchor tag", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.phone).tagName).toBe("A");
  });

  it("should phone anchor have href", () => {
    const { queryByText } = render(<Introduction />);

    expect(queryByText(data.phone).getAttribute("href")).toBe(
      "tel:+33671370267"
    );
  });
});
