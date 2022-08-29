export class Tile {
  color?: string;

  constructor(public regionId: number) {}

  public render(): string {
    if (!this.color) {
      return `${this.regionId ?? -1}`;
    }
    return "█";
  }
}
