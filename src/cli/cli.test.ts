import { parse } from "./cli";

describe("CLI commands", () => {
  it("should parse the command line arguments", () => {
    const args = parse();
    expect(args.mapSize).toBe(10);
    expect(args.regions).toBe(5);
  });
});
