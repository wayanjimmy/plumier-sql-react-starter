import { response, route } from "plumier";
import { join } from "path";

export class HomeController {
    @route.get("/")
    index(){
        return response.file(join(__dirname, "../../public/index.html"))
    }
}