//TÜM STATE LERİN TOPLANDIĞI YER
//STATE LERİ TEK BİR YERDE TOPLAYIP UYGULAMAYA BURADAN EKLEYECEĞİZ

import { combineReducers } from "redux";
import favReducer from "./reducers/favReducer"

const rootReducer = combineReducers({
    //tüm reducer larımızı buraya yazacağız
    favourites :favReducer
})

export default rootReducer