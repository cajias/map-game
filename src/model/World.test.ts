import { WorldMap } from "./World";

test("Empty World", () => {
  const world = new WorldMap(0, 0);
  expect(world.tiles).toHaveLength(0);
});

test("2^1 Cell World", () => {
  const world = new WorldMap(1, 0);
  expect(world.tiles).toHaveLength(1);
  expect(world.tiles[0]).toHaveLength(1);
  expect(world.tiles[0][0]).toBe("0");
});

test("2^2 Cell World", () => {
  const world = new WorldMap(2, 0);
  expect(world.tiles).toHaveLength(2);
  expect(world.tiles[0]).toHaveLength(2);
  expect(world.tiles[0][0]).toBe("0");
});
