import { Experiences } from "@components/Experiences";
import { render } from "@utils/customRender";
import { data } from "./data";

describe(Experiences.name, () => {
  it("should render a title", () => {
    const { queryByText } = render(<Experiences />);

    expect(queryByText("Expériences")).toBeInTheDocument();
  });

  it("should render jobs", () => {
    const { queryByText } = render(<Experiences />);

    data.forEach(({ job }) => {
      expect(queryByText(new RegExp(job))).toBeInTheDocument();
    });
  });

  it("should render company", () => {
    const { queryByText } = render(<Experiences />);

    data.forEach(({ company }) => {
      expect(queryByText(new RegExp(company))).toBeInTheDocument();
    });
  });

  it("should render missions", () => {
    const { queryByText } = render(<Experiences />);

    data.forEach(({ missions }) => {
      missions.forEach((mission) => {
        expect(queryByText(mission)).toBeInTheDocument();
      });
    });
  });
});
