import { val } from "@plumjs/validator";

export function uniqueEmail() {
    return val.custom("val:unique-email")
}

