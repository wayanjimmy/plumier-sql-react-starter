import Plumier, { ServeStaticFacility, WebApiFacility, JwtAuthFacility } from "@plumjs/plumier"
import logger from "koa-logger"
import { join } from "path"
import { config } from "./config";

export default function createApp() {
    return new Plumier()
        .use(logger())
        .set(new WebApiFacility())
        .set(new ServeStaticFacility({ root: join(__dirname, "../public") }))
        .set(new JwtAuthFacility({ secret: config.jwtSecret }))
        .initialize()
}