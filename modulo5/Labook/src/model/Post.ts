export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}

export default class Post{
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private creationDate: Date,
        private type: POST_TYPES,
        private userId: string
    ){}
}