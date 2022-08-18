import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export type Config = {
  mapSize: number;
  regions: number;
};

const defaultConfig = {
  mapSize: 10,
  regions: 5,
};

export function parse(): Config {
  return yargs(hideBin(process.argv))
    .usage("Usage: $0 <command> [options]")
    .example("$0 play -l 10 -n 5", "Play a game with a 10x10 map and 5 regions")
    .alias("l", "mapSize")
    .alias("n", "regions")
    .nargs("l", 1)
    .nargs("n", 1)
    .describe("l", `Map size (NxN). Default ${defaultConfig.mapSize}`)
    .describe("n", `Number of regions. Default ${defaultConfig.regions}`)
    .alias("h", "help")
    .default(defaultConfig)
    .help()
    .wrap(72).argv as Config;
}
