import axios from 'axios'
import {API_URL} from '../config'

export function getFilms() {
    return (dispatch) => {
        axios.get(`${API_URL()}/films/`)
            .then((res) => {
                dispatch(getFilmsSuccess(res))
            })
            .catch((error) => {
                throw(error)
            })
    }
}

export const getFilmsSuccess = (data) => {
    return {
        type: "GET_FILMS",
        payload: data
    }
}