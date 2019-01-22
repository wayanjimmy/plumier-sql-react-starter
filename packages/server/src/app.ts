import Plumier, { WebApiFacility, JwtAuthFacility, ServeStaticFacility } from "@plumjs/plumier"
import { join } from "path";
import logger from "koa-logger"

export default function createApp() {
    return new Plumier()
        .use(logger())
        .set(new WebApiFacility({ controller: "controller" }))
        .set(new ServeStaticFacility({ root: join(__dirname, "../public") }))
        .initialize()
}