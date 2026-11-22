import { countPassFromZero, Direction, firstPuzzleResolver, parseLine, updateIndex } from "./main";

describe("01", () => {
  it("parseLine", () => {
    expect(parseLine("L41")).toEqual({ direction: Direction.Left, count: 41 });
    expect(parseLine("R1")).toEqual({ direction: Direction.Right, count: 1 });
  });

  it("updateIndex", () => {
    expect(updateIndex(5, parseLine("L10"))).toEqual(95);
    expect(updateIndex(95, parseLine("R5"))).toEqual(0);
  });

  it("updateIndex normalizes large left rotations", () => {
    expect(updateIndex(50, parseLine("L151"))).toEqual(99);
    expect(updateIndex(50, parseLine("L251"))).toEqual(99);
    expect(updateIndex(50, parseLine("L301"))).toEqual(49);
    expect(updateIndex(99, parseLine("L200"))).toEqual(99);
  });

  it("firstPuzzleResolver", () => {
    expect(firstPuzzleResolver("01/input.toy.txt")).toEqual(3);
  });

  it("countPassFromZero", () => {
    expect(countPassFromZero(3, { direction: Direction.Left, count: 5 })).toEqual(1);
    expect(countPassFromZero(3, { direction: Direction.Left, count: 2 })).toEqual(0);
    expect(countPassFromZero(3, { direction: Direction.Left, count: 105 })).toEqual(2);
    expect(countPassFromZero(3, { direction: Direction.Left, count: 3 })).toEqual(1);
    expect(countPassFromZero(3, { direction: Direction.Right, count: 5 })).toEqual(0);
    expect(countPassFromZero(3, { direction: Direction.Right, count: 100 })).toEqual(1);
    expect(countPassFromZero(3, { direction: Direction.Right, count: 97 })).toEqual(1);
    expect(countPassFromZero(3, { direction: Direction.Right, count: 200 })).toEqual(2);
  });

  it("countPassFromZero zero based RIGHT", () => {
    expect(countPassFromZero(0, { direction: Direction.Right, count: 99 })).toEqual(0);
    expect(countPassFromZero(0, { direction: Direction.Right, count: 100 })).toEqual(1);
    expect(countPassFromZero(0, { direction: Direction.Right, count: 200 })).toEqual(2);
    expect(countPassFromZero(0, { direction: Direction.Right, count: 0 })).toEqual(0);
  });

  it("countPassFromZero zero based LEFT", () => {
    expect(countPassFromZero(0, { direction: Direction.Left, count: 5 })).toEqual(0);
    expect(countPassFromZero(0, { direction: Direction.Left, count: 99 })).toEqual(0);
    expect(countPassFromZero(0, { direction: Direction.Left, count: 100 })).toEqual(1);
    expect(countPassFromZero(0, { direction: Direction.Left, count: 0 })).toEqual(0);
  });
});
