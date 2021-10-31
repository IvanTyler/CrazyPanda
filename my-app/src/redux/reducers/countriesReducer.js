import { initState } from "../initState";
import {
    GET_COUNTRIES_DATA
} from "../types/countriesTypes";


export const countriesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_DATA:
            return {
                ...state, countriesData: action.payload
            }
        default: return state
    }
}