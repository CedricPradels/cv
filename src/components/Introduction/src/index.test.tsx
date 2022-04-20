import { Introduction } from "@components/Introduction";
import { render } from "@utils/customRender";
import { data } from "./data";

describe(Introduction.name, () => {
  it("should render my name", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.name)).toBeInTheDocument();
  });

  it("should render my description", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.description)).toBeInTheDocument();
  });

  it("should render a title", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.title)).toBeInTheDocument();
  });

  it("should render an email", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.email)).toBeInTheDocument();
  });

  it("should email be an anchor tag", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.email).tagName).toBe("A");
  });

  it("should email anchor have href", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.email).getAttribute("href")).toBe(
      "mailto:cedric.pradels@gmail.com"
    );
  });

  it("should render an phone", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.phone)).toBeInTheDocument();
  });

  it("should phone be an anchor tag", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.phone).tagName).toBe("A");
  });

  it("should phone anchor have href", () => {
    const { getByText } = render(<Introduction />);

    expect(getByText(data.phone).getAttribute("href")).toBe("tel:+33671370267");
  });
});
