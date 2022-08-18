import { World } from "./World";

test("Empty World", () => {
  const world = new World(0, 0);
  expect(world.territory).toHaveLength(0);
});

test("2^1 Cell World", () => {
  const world = new World(1, 0);
  expect(world.territory).toHaveLength(1);
  expect(world.territory[0]).toHaveLength(1);
  expect(world.territory[0][0]).toBe("0");
});

test("2^2 Cell World", () => {
  const world = new World(2, 0);
  expect(world.territory).toHaveLength(2);
  expect(world.territory[0]).toHaveLength(2);
  expect(world.territory[0][0]).toBe("0");
});
