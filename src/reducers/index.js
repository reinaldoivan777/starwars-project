import { combineReducers } from "redux"
import filmReducer from './filmReducer'
import peopleReducer from "./peopleReducer";

const rootReducer = combineReducers({
    films: filmReducer,
    people: peopleReducer
})

export default rootReducer