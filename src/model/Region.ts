import { Tile } from "./WorldMap/Tile";
import { Player } from "./Player";

export class Region {
  private owner?: Player;

  get ownerId() {
    return this.owner?.id;
  }

  constructor(id: number, private readonly tiles: Tile[]) {
    tiles.forEach((p) => (p.region = id));
  }

  add(tile: Tile): void {
    this.tiles.push(tile);
  }

  assign(owner: Player): void {
    this.owner = owner;
    this.tiles.forEach((p) => {
      p.color = this.owner?.color;
    });
  }
}
