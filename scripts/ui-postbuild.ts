import * as fs from "fs-extra"
import { join } from "path";

//copy production build into server static files folder
fs.copySync(join(__dirname, "../packages/ui/build"), join(__dirname, "../packages/server/public"))