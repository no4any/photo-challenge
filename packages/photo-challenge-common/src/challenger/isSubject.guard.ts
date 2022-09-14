import { Subject } from "./Subject.interface"

export const isSubject = (obj:unknown): obj is Subject => {
    return true;
}