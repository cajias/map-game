#!/usr/bin/env node
import { Game } from "./model";
import { WorldMap } from "./model/WorldMap";

// TODO @begggs remove
export function calculator(num1: number, num2: number): number {
  return num1 + num2;
}

// TODO @begggs make player count configurable from CLI
const playerCount = 3;

/**
 * main
 * Starting point of the game:
 * - Parse configs
 * - Configure new game
 * - Run the game loop
 */
function main(): void {
  // TODO: @begggs autogenerate
  const world = WorldMap.fromMap([
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2],
    [0, 1, 1, 1, 1, 1, 1, 2, 2, 4, 2],
    [0, 1, 1, 1, 1, 1, 1, 2, 2, 4, 2],
    [0, 1, 1, 2, 2, 2, 2, 2, 2, 4, 2],
    [0, 1, 1, 2, 2, 2, 2, 2, 2, 4, 2],
    [0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 3],
    [0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 3],
    [0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 3],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 3],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3],
  ]);
  // const _config = parse();
  // const world = WorldMap.fromRegions(config.mapSize, config.regions);
  const game = new Game(world, playerCount);
  game.run();
}

main();
