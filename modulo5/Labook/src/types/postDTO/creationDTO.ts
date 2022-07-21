import { POST_TYPES } from "../../model/Post"

export type creationDTO = {
    photo: string,
    description: string,
    type: POST_TYPES
}