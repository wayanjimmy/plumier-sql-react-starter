import createApp from "./app";

createApp()
    .then(koa => koa.listen(8000))
    .catch(err => console.error(err));
