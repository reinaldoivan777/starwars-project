const INITIAL_STATE = {data:{}}

const filmReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_FILMS": 
            return { ...state, data:action.payload }
        default:
            return state
    }
}

export default filmReducer