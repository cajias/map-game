import { Tile } from "./Tile";
import { Player } from "./World";

export class Region {
  private owner?: Player;

  constructor(id: number, private readonly tiles: Tile[]) {
    tiles.forEach((p) => {
      p.regionId = id;
    });
  }

  assign(owner: Player): void {
    this.owner = owner;
    this.tiles.forEach((p) => {
      p.color = this.owner?.color;
    });
  }
}
