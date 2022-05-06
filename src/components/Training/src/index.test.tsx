import { Training } from "@components/Training";
import { data } from "./data";
import { render } from "@utils/customRender";
import { getDateString } from "@utils/getDateString";

describe(Training.name, () => {
  it("should have a title", () => {
    const { queryByText } = render(<Training />);

    expect(queryByText("Formations")).toBeInTheDocument();
  });

  it("should render a title for trainings", () => {
    const { queryByText } = render(<Training />);

    data.forEach(({ date, school, title }) => {
      expect(
        queryByText(`${getDateString(date)} – ${title} – ${school}`)
      ).toBeInTheDocument();
    });
  });

  it("should render the themes of trainings", () => {
    const { queryByText } = render(<Training />);

    data.forEach(({ themes }) => {
      themes?.forEach((theme) => {
        expect(queryByText(theme)).toBeInTheDocument();
      });
    });
  });
});
