import { combineReducers } from "redux";
import animalReducer from './animalReducer';
import userReducer from './userReducer';
import reqReducer from './reqReducer';

const rootReducer = combineReducers({
    animalReducer, userReducer, reqReducer
})

export default rootReducer;