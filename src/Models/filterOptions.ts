export interface IFileterOptions {
    name: string,
    value: number,
    checkboxes:[
        {
            name: string,
            id: number,
            type: string
        },
    ]
}