import * as fs from "fs-extra"
import { join } from "path";

const publishPath = "../../../build/packages/server"
const publishedPackageJsonPath = join(__dirname, publishPath, `package.json`)
//copy and modify published package.json
fs.copySync(join(__dirname, "../package.json"), publishedPackageJsonPath)
const pkg = JSON.parse(fs.readFileSync(publishedPackageJsonPath).toString())
pkg.scripts.start = "node src/index.js"
pkg.scripts["migrate:latest"] = "knex migrate:latest"
pkg.scripts["migrate:rollback"] = "knex migrate:rollback"
fs.writeFileSync(publishedPackageJsonPath, JSON.stringify(pkg, null, 4))
//copy config file
fs.copySync(join(__dirname, "../config.yaml"), join(__dirname, publishPath, "config.yaml"))
//copy static files from server to build folder
fs.copySync(join(__dirname, "../public"), join(__dirname, publishPath, "public"))