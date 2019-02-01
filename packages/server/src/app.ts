import Plumier, { JwtAuthFacility, ServeStaticFacility, WebApiFacility } from "@plumjs/plumier"
import logger from "koa-logger"
import { join } from "path"

import { validatorStore } from "./business/validator"
import { config } from "./config"

export default function createApp() {
    return new Plumier()
        .use(logger())
        .set(new WebApiFacility())
        .set({validators: validatorStore})
        .set(new ServeStaticFacility({ root: join(__dirname, "../public") }))
        .set(new JwtAuthFacility({ secret: config.jwtSecret }))
        .initialize()
}