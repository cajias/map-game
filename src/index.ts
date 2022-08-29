#!/usr/bin/env node
import { parse } from "./cli";
import { Game } from "./model";
import readline from "readline";
import { WorldMap } from "./model/World";

export function calculator(num1: number, num2: number): number {
  return num1 + num2;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

async function readNextPlay() {
  return new Promise<number>((resolve) => {
    rl.on("line", (line) => {
      const n = Number(line.trim());
      if (isNaN(n)) {
        return;
      }
      resolve(n);
    });
  });
}

const playerCount = 3;

async function play(game: Game): Promise<void> {
  let iter = 0;
  while (iter < 5 * playerCount) {
    iter++;
    console.log(game.render());
    const nextPlay = await readNextPlay();
    game.play(nextPlay);
    console.clear();
  }
}

function main(): void {
  const config = parse();
  const world = new WorldMap(config.mapSize, config.regions);
  const game = new Game(world, playerCount);
  play(game);
}

main();
