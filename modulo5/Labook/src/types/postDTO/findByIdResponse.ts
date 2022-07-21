import { POST_TYPES } from "../../model/Post"

export type FindByIdResponse = {
     id: string,
     photo: string,
     description: string,
     creationDate: Date,
     type: POST_TYPES,
     userId: string
}[]