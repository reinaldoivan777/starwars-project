const INITIAL_STATE = {data:{}, filmIndex: -1}

const filmReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_FILMS": 
            return { ...state, data: action.payload }
        case "FILM_INDEX": 
            return { ...state, filmIndex: action.index }
        default:
            return state
    }
}

export default filmReducer