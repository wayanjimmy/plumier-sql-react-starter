import {compile} from "ejs"
import * as fs from "fs-extra"
import { join } from "path";

const domainName = process.argv[2]
const isForce = process.argv.some(x => x === "--force")
const template = compile(fs.readFileSync(join(__dirname, "template/controller.ejs")).toString())
const result = template({model: domainName})
const ctlPath = join(__dirname, "../packages/server/src/controller/api", `${domainName.toLowerCase()}-controller.ts`);
if(fs.existsSync(ctlPath) && !isForce) {
    console.log(`GENERATE ERROR: File with the same name already exists use --force to overwrite`)
}
else {
    fs.writeFileSync(ctlPath, result)
}