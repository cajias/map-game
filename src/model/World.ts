export class World {
  public readonly territory: Array<Array<string>>;
  private readonly verticalBorder: string;

  constructor(size: number, _regions: number) {
    this.territory = new Array(size);
    for (let i = 0; i < this.territory.length; i++) {
      this.territory[i] = new Array(size).fill("0");
    }
    this.verticalBorder =
      this.territory.length == 0
        ? ""
        : `${"═".repeat(this.territory?.length * 4 - 1)}`;
  }

  public render(): string {
    const body = this.territory
      .map((row) => `║ ${row.join(" │ ")} ║`)
      .join(`\n║${"───┼".repeat(this.territory.length - 1)}───╢\n`);
    return `╔${this.verticalBorder}╗\n${body}\n╚${this.verticalBorder}╝`;
  }
}
