import { WorldMap } from "./WorldMap";

test("Empty World", () => {
  const world = WorldMap.fromRegions(0, 0);
  expect(world.tiles).toHaveLength(0);
});

test("2^1 Cell World", () => {
  const world = WorldMap.fromRegions(1, 0);
  expect(world.tiles).toHaveLength(1);
  expect(world.tiles[0].region).toBe(NaN);
});

test("2^1 Cell World with region", () => {
  const world = WorldMap.fromRegions(1, 1);
  expect(world.tiles).toHaveLength(1);
  expect(world.tiles[0].region).toBe(0);
  expect(world.toString()).toBe("╔═╗\n" + "║0║\n" + "╚═╝");
});

test("2^2 Cell World", () => {
  const world = WorldMap.fromRegions(2, 0);
  expect(world.tiles).toHaveLength(4);
  expect(world.tiles[0].region).toBe(NaN);
});

test("2^2 Cell World with 1 region", () => {
  const world = WorldMap.fromRegions(2, 1);
  expect(world.tiles).toHaveLength(4);
  expect(world.tiles[0].region).toBe(0);
  expect(world.toString()).toBe("╔══╗\n" + "║00║\n" + "║00║\n" + "╚══╝");
});

test("3^2 Cell World with 1 region", () => {
  const world = WorldMap.fromRegions(3, 1);
  expect(world.tiles).toHaveLength(9);
  expect(world.tiles[0].region).toBe(0);
  expect(world.toString()).toBe(
    "╔═══╗\n" + "║000║\n" + "║000║\n" + "║000║\n" + "╚═══╝"
  );
});

test("3^2 Cell World with 2 region", () => {
  const world = WorldMap.fromMap([
    [1, 1, 1],
    [1, 0, 0],
    [0, 0, 0],
  ]);
  expect(world.tiles).toHaveLength(9);
  expect(world.tiles[0].region).toBe(1);
  const s = "╔═══╗\n" + "║111║\n" + "║100║\n" + "║000║\n" + "╚═══╝";
  expect(world.toString()).toBe(s);
  console.log(world.toString());
  console.log(s);
});
