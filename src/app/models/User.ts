export interface User {
    created: number,
    id: string,
    karma: number,
    submitted: number[]
    delay?: number,
    datePosted?: string,
}

export const initUser = {
    created: 0,
    id: '',
    karma: 0,
    submitted: [],
    datePosted: ''
}