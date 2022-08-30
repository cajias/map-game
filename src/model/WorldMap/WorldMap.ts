import { Tile } from "./Tile";
import { Region } from "../Region";

export class WorldMap {
  private readonly renderTable: Array<Array<string | Tile>>;

  constructor(
    public readonly tiles: Tile[],
    public readonly regions: { [key: number]: Region }
  ) {
    this.renderTable = this.tiles.length === 0 ? [] : this.initTable();
  }

  static fromRegions(size: number, regionCount: number): WorldMap {
    const tiles = Array.from(new Array(size ** 2), (_, k) => new Tile(k));
    const regions: { [key: number]: Region } = {};
    if (regionCount > 0) {
      regions[0] = new Region(0, tiles);
    }
    return new WorldMap(tiles, regions);
  }

  static fromMap(regionMap: number[][]): WorldMap {
    const tiles = regionMap.flatMap((row) =>
      row.map((region, index) => {
        const tile = new Tile(index);
        tile.region = region;
        return tile;
      })
    );
    const regions = tiles.reduce((acc, curr) => {
      if (!acc[curr.region]) {
        acc[curr.region] = new Region(curr.region, []);
      }
      acc[curr.region].add(curr);
      return acc;
    }, <{ [key: number]: Region }>{});
    return new WorldMap(tiles, regions);
  }

  private get size() {
    return this.tiles.length ** 0.5;
  }

  toString(): string {
    return this.renderTable
      .map((p) => p.map((q) => q.toString()).join(""))
      .join("\n");
  }

  private initTable(): Array<Array<string | Tile>> {
    const verticalBorder = new Array(this.size).fill("═");
    let i = 0;
    const table = new Array<Array<string | Tile>>(this.size + 2);
    table[i] = ["╔", ...verticalBorder, "╗"];
    i++;
    for (let j = 0; j < this.tiles.length; j += this.size) {
      table[i] = this.initVerticalBorders(j);
      i++;
    }

    table[i] = ["╚", ...verticalBorder, "╝"];
    return table;
  }

  private initVerticalBorders(offset: number): Array<string | Tile> {
    const row = new Array<string | Tile>(this.size);
    for (let i = 0; i < row.length; i++) {
      row[i] = this.tiles[i + offset];
    }
    return ["║", ...row, "║"];
  }
}
