import { route } from "@plumjs/core";
import { response } from "@plumjs/plumier";
import { join } from "path";

export class HomeController {
    @route.get("/")
    index(){
        return response.file(join(__dirname, "../../public/index.html"))
    }
}