const INITIAL_STATE = {data: {}}

const peopleReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_PEOPLE_BY_ID": 
            return {...state, data: action.payload}
        default:
            return state
    }
}

export default peopleReducer