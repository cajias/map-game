import { Tile } from "./Tile";
import { Region } from "./Region";

export class WorldMap {
  public readonly tiles: Tile[];
  public readonly regions: Region[];

  constructor(private readonly size: number, _regions: number) {
    this.tiles = Array.from(new Array(this.size ** 2), () => new Tile(0));

    // TODO: @begggs support more than one region
    this.regions = [
      new Region(
        0,
        this.tiles.flatMap((p) => p)
      ),
    ];
  }

  private verticalBorder = () =>
    this.size === 0 ? "" : `${"═".repeat(this.size * 4 - 1)}`;

  render(): string {
    const row = new Array(this.size);
    let i = 0;
    let table = `╔${this.verticalBorder()}╗\n`;
    for (const cell of this.tiles) {
      row[i] = cell.render();
      i++;
      if (i === this.size) {
        i = 0;
        table += `║ ${row.join(" │ ")} ║\n`;
      }
    }
    table += `╚${this.verticalBorder()}╝`;
    return table;
  }
}

export type Player = {
  id: number;
  color: string;
};
