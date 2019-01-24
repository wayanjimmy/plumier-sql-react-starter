import * as del from "del"

del.sync([
    "packages/server/**/*.js",
    "packages/server/public",
    "packages/ui/build",
    "./build"
])