import { combineReducers } from "redux";
import favReducer from "./reducers/favReducer"

const rootReducer = combineReducers({
    //tüm reducer larımızı buraya yazacağız
    favourites :favReducer
})

export default rootReducer