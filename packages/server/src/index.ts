import createApp from "./app";
import { config } from "./config";

createApp()
    .then(koa => koa.listen(config.port))
    .then(x => console.log(`JSON API ready http://localhost:${config.port}`))
    .catch(err => console.error(err))