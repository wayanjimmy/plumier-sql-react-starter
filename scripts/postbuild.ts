import * as fs from "fs-extra"
import { join } from "path";

const publishPath = "../build"
const publishedPackageJsonPath = join(__dirname, publishPath, `package.json`)

fs.copySync(join(__dirname, "../package.json"), publishedPackageJsonPath)

//modify published package.json
const pkg = JSON.parse(fs.readFileSync(publishedPackageJsonPath).toString())
pkg.scripts = { start: "yarn workspace server start" }
fs.writeFileSync(publishedPackageJsonPath, JSON.stringify(pkg, null, 4))
