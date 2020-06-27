import { combineReducers } from "redux";
import animalReducer from './animalReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    animalReducer, userReducer
})

export default rootReducer;