import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"
import reducer from "./reducers"

function configureStore() {
    let middlewares = []
    middlewares.push(thunk)
    if (process.env.NODE_ENV === "development") {
        middlewares.push(logger)
    }

    const store = createStore(reducer, {}, applyMiddleware(...middlewares))

    return store
}

export default configureStore