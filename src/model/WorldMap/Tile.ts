import chalk from "chalk";

export class Tile {
  color?: string;
  private _region?: number;

  constructor(readonly id: number) {}

  get region() {
    return this._region ?? NaN;
  }

  set region(id: number) {
    if (this._region !== undefined) {
      return;
    }
    this._region = id;
  }

  toString(): string {
    if (!this.color) {
      return `${this._region ?? "□"}`;
    }
    return chalk.bgHex(this.color).dim(this._region);
  }
}
