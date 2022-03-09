export interface Link{
    _id: string,
    title: string,
    url: string
}

export interface LinkState{
    entities: { [id:number]: Link}
    loaded: boolean,
    loading: boolean
}