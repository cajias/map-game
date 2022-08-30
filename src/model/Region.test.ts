import { Region } from "./Region";
import { Tile } from "./WorldMap/Tile";
import { Player } from "./Player";

describe("Assign player to a region", () => {
  const tile = new Tile(1);
  const region = new Region(1, [tile]);
  const owner = new Player(6);
  beforeAll(() => {
    expect(tile.color).toBeUndefined();
    expect(region.ownerId).toBeUndefined();
    region.assign(owner);
  });
  it("sets the region owner id to the player's id", () => {
    expect(region.ownerId).toEqual(owner.id);
  });
  it("sets the color of the tiles in the region to the owner's color", () => {
    expect(tile.color).toEqual(owner.color);
  });
});
