import { getDateString } from "@utils/getDateString";

describe("getDateString", () => {
  it("should return a year", () => {
    const dt = new Date("1990-01-01");

    expect(getDateString(dt)).toBe("1990");
  });
});
