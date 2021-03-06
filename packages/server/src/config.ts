import { parse } from "yaml";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * This class provide type safety for configuration (packages/server/config.yaml)
 */
export interface Config {
    port:number
    dbUri:string
}

export const config = parse(readFileSync(join(__dirname, "../config.yaml")).toString()) as Config