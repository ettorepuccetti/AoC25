import { syncReadFile } from "../utils/utils";

export function firstPuzzleResolver(filePath: string): number {
  const lines: string[] = syncReadFile(filePath);
  const STARTING_INDEX: number = 50;
  let result = 0;
  let currentIndex: number = STARTING_INDEX;
  for (const line of lines) {
    const dialCommand: DialCommand = parseLine(line);
    currentIndex = updateIndex(currentIndex, dialCommand);
    if (currentIndex === 0) {
      result++;
    }
  }
  return result;
}

export function updateIndex(startIndex: number, dialCommand: DialCommand) {
  if (dialCommand.direction === Direction.Left) {
    return (startIndex - dialCommand.count + 100) % 100;
  } else {
    return (startIndex + dialCommand.count) % 100;
  }
}

export function parseLine(line: string): DialCommand {
  const direction = line[0] === Direction.Left ? Direction.Left : Direction.Right;
  const count = parseInt(line.slice(1));
  return {
    direction,
    count,
  };
}

interface DialCommand {
  direction: Direction;
  count: number;
}

export enum Direction {
  Left = "L",
  Right = "R",
}

export function secondPuzzleResolver(filePath: string) {
  console.log("second puzzle result: ");
}

console.log("first puzzle result: ", firstPuzzleResolver("01/input.txt"));
