import axios from 'axios'

export function getPeopleById(url) {
    return (dispatch) => {
        axios.get(url)
            .then((res) => {
                dispatch(getPeopleByIdSuccess(res))
            })
            .catch((error) => {
                throw(error)
            })
    }
}

export const getPeopleByIdSuccess = (data) => {
    return {
        type: "GET_PEOPLE_BY_ID",
        payload: data
    }
}