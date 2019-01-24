import Plumier, { ServeStaticFacility, WebApiFacility } from "@plumjs/plumier"
import logger from "koa-logger"
import { join } from "path"

export default function createApp() {
    return new Plumier()
        .use(logger())
        .set(new WebApiFacility())
        .set(new ServeStaticFacility({ root: join(__dirname, "../public") }))
        .initialize()
}