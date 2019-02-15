import { val } from "@plumier/validator";

export function uniqueEmail() {
    return val.custom("val:unique-email")
}

