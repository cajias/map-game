#!/usr/bin/env node
import { parse } from "./cli";
import { Game, World } from "./model";

export function calculator(num1: number, num2: number): number {
  return num1 + num2;
}

function main(): void {
  const config = parse();
  const world = new World(config.mapSize, config.regions);
  const game = new Game(world);
  game.play();
}

main();
