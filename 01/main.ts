import { syncReadFile } from "../utils/utils";

const STARTING_INDEX: number = 50;

export function firstPuzzleResolver(filePath: string): number {
  const lines: string[] = syncReadFile(filePath);
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

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function updateIndex(startIndex: number, dialCommand: DialCommand) {
  if (dialCommand.direction === Direction.Left) {
    return mod(startIndex - dialCommand.count, 100);
  } else {
    return mod(startIndex + dialCommand.count, 100);
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
  const lines: string[] = syncReadFile(filePath);
  let result = 0;
  let currentIndex: number = STARTING_INDEX;

  for (const line of lines) {
    const dialCommand: DialCommand = parseLine(line);
    result += countPassFromZero(currentIndex, dialCommand);
    currentIndex = updateIndex(currentIndex, dialCommand);
  }

  return result;
}

export function countPassFromZero(startIndex: number, dialCommand: DialCommand): number {
  let result;
  if (dialCommand.direction === Direction.Left) {
    result = Math.floor(((startIndex - dialCommand.count) * -1) / 100) + 1;
    if (startIndex === 0) {
      result--;
    }
  } else {
    result = Math.floor((startIndex + dialCommand.count) / 100);
  }
  return result;
}

// console.log("first puzzle result: ", firstPuzzleResolver("01/input.txt"));
console.log("second puzzle result: ", secondPuzzleResolver("01/input.txt"));
