const colors = ["#5C4B51", "#8CBEB2", "#F2EBBF", "#F3B562", "#F06060"]; // https://colordesigner.io/#5C4B51-8CBEB2-F2EBBF-F3B562-F06060

export class Player {
  constructor(public id: number) {}

  get color(): string {
    return colors[this.id];
  }
}
