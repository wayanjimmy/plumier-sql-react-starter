import { parse } from "yaml";
import { readFileSync } from "fs";
import { join } from "path";

export interface Config {
    dbUri:string
}

export const config = parse(readFileSync(join(__dirname, "../config.yaml")).toString()) as Config