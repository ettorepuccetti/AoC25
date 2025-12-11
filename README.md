# Advent of Code 2023 [Typescript]

## How to run script from shell

### 1. Install dependencies

```
npm i
```

### 2. Provide input puzzle

Every day needs to found its input puzzle in `folder_number/input.txt` (e.g. `01/input.txt`).

### 3. Run with `tsx` (zero config typescript for node)

From root folder of the project, run the `main.ts` file in each day folder, for instance, for day 1:

```
pnpm tsx 01/main.ts
```

## Debug

Run the task `tsx` defined in `.vscode/launch.json`. It launch the current opened file, output is promted in the integrated terminal/

## Test

For running test from console: `pnpm test [path-to-test]`

or use the Jest extension

## Debug test

Run the task `Jest: current file` defined in `.vscode/launch.json`. It launch in debug the current opened file, output is promted in the integrated terminal (new tab).
