import { Direction, firstPuzzleResolver, parseLine, updateIndex } from "./main";

describe("01", () => {
  it("parseLine", () => {
    expect(parseLine("L41")).toEqual({ direction: Direction.Left, count: 41 });
    expect(parseLine("R1")).toEqual({ direction: Direction.Right, count: 1 });
  });

  it("updateIndex", () => {
    expect(updateIndex(5, parseLine("L10"))).toEqual(95);
    expect(updateIndex(95, parseLine("R5"))).toEqual(0);
  });

  it("firstPuzzleResolver", () => {
    expect(firstPuzzleResolver("01/input.toy.txt")).toEqual(3);
  });
});
