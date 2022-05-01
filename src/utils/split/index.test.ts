import { split } from "@utils/split";

describe("split", () => {
  it("shoult split a list into sublist", () => {
    expect(split(2)(["A", "B", "C"])).toStrictEqual([["A", "B"], ["C"]]);

    expect(split(1)(["A", "B", "C"])).toStrictEqual([["A", "B", "C"]]);

    expect(split(3)(["A", "B", "C"])).toStrictEqual([["A"], ["B"], ["C"]]);

    expect(split(4)(["A", "B", "C"])).toStrictEqual([["A"], ["B"], ["C"], []]);
  });

  it("should throw if chunks < 0", () => {
    expect(split(-1)).toThrow();
  });

  it("should return an empty list", () => {
    expect(split(2)([])).toStrictEqual([[], []]);

    expect(split(0)(["A", "B", "C"])).toStrictEqual([]);
  });
});
