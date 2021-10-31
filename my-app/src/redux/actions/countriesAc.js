import axios from "axios";
import {
    GET_COUNTRIES_DATA
} from "../types/countriesTypes";

export const setCountriesData = (countriesList) => {
    return {
        type: GET_COUNTRIES_DATA,
        payload: countriesList,
    }
}

export const getCountriesData = () => async (dispatch) => {
    const ApiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=100&_page=3'
    const countriesData = await axios.get(ApiUrl)
    dispatch(setCountriesData(countriesData.data))
}