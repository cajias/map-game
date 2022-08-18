import { World } from "./World";

export class Game {
  constructor(private readonly world: World) {}

  public play(): void {
    console.log(this.world.render());
  }
}
