export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}

export default class Post{
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private created_at: Date,
        private author_id: string
    ){}
}