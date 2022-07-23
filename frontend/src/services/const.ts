import { Outcomes } from "../model";


export const defaultOutcome = {value:""} as unknown as Outcomes;


export const defaultOutcomes = [{...defaultOutcome}, {...defaultOutcome}, {...defaultOutcome}, {...defaultOutcome}, {...defaultOutcome}]


export const defaultPrediction =  {email: '', wantResultUpdate: false, subscribe: false};
