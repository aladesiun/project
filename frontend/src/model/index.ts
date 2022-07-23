export interface Prediction {
    email: string,
    wantResultUpdate: boolean,
    subscribe: boolean,
    predictions: Array<string>
}


export interface Outcomes {
    value: string,
}