import { Challenger } from "../challenger";

export interface Challenge {
    title: string,
    description: string,
    previewImage?: string,
    owner: Challenger,
    manager?: Challenger[]
}