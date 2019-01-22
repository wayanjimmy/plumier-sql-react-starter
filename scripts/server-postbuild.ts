import * as fs from "fs-extra"
import { join } from "path";

//copy server package.json to build folder
fs.copySync(join(__dirname, "../packages/server/package.json"), join(__dirname, "../build/package.json"))

//modify the start script
const pkg = JSON.parse(fs.readFileSync(join(__dirname, "../build/package.json")).toString())
pkg.scripts.start = "node src/index.js"
fs.writeFileSync(join(__dirname, "../build/package.json"), JSON.stringify(pkg, null, 4))

//copy static files from server to build folder
fs.copySync(join(__dirname, "../packages/server/public"), join(__dirname, "../build/public"))