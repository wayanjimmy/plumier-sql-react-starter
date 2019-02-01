import { val } from "@plumjs/validator";

export function unique() {
    return val.custom("val:unique")
}

