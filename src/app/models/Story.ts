export interface Story {
    by : string,
    descendants : number,
    id : number,
    kids : number[],
    score : number,
    time : number,
    datePosted?: string
    title : string,
    type : string,
    url : string,
}

export const initStory = {
    by : "",
    descendants : 0,
    id : 0,
    kids : [],
    score : 0,
    time : 0,
    title : "",
    type : "",
    url : "",
}