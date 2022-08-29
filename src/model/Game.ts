import { Player, WorldMap } from "./World";

export class Game {
  private playCount = 0;
  private readonly players: Player[];

  constructor(private world: WorldMap, playerCount: number) {
    this.players = Array.from(
      Array(playerCount),
      (_, id) => ({ id, color: "" } as Player)
    );
  }

  /**
   * turn
   * Whose turn is it?
   */
  turn(): Player {
    return this.players[this.playCount % this.players.length];
  }

  /**
   * play
   * Current player takes region by number
   * @param region
   */
  public play(region: number): void {
    this.world.regions[region].assign(this.turn());
    this.playCount++;
  }

  public render(): string {
    let rendered = this.world.render();
    rendered += "\n";
    rendered += `> Player ${this.turn().id}: `;
    return rendered;
  }
}
