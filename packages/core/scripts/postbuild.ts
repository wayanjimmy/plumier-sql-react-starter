import * as fs from "fs-extra"
import { join } from "path";

const publishPath = "../../../build/packages/core"
const publishedPackageJsonPath = join(__dirname, publishPath, `package.json`)
//copy and modify published package.json
fs.copySync(join(__dirname, "../package.json"), publishedPackageJsonPath)