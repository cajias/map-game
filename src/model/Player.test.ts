import { Player } from "./Player";

test("Players get different colors", () => {
  const playerCount = 4;
  const uniqueColorCount = Array.from(Array(4))
    .map((_, index) => new Player(index).color)
    .reduce((acc, curr) => acc.add(curr), new Set<string>()).size;
  expect(uniqueColorCount).toBe(playerCount);
});
