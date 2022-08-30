import { WorldMap } from "./WorldMap";
import { Player } from "./Player";
import readline from "readline";

export class Game {
  private playCount = 0;
  private readonly players: Player[];

  constructor(private world: WorldMap, playerCount: number) {
    this.players = Array.from(Array(playerCount), (_, id) => new Player(id));
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

  public toString(): string {
    let rendered = this.world.toString();
    rendered += "\n";
    rendered += `> Player ${this.turn().id}: `;
    return rendered;
  }

  async run(): Promise<void> {
    let iter = 0;
    while (iter < 5 * this.players.length) {
      iter++;
      console.log(this.toString());
      const nextPlay = await readNextPlay();
      this.play(nextPlay);
      console.clear();
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

async function readNextPlay() {
  return new Promise<number>((resolve) => {
    rl.on("line", (line) => {
      const n = Number(line.trim());
      if (isNaN(n)) {
        return;
      }
      resolve(n);
    });
  });
}
