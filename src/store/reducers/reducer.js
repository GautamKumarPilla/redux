import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import studentReducer from "./student.reducer";
 import { combineReducers } from "redux";
import countriesReducer from "./countries.reducer";
import likedislikeReducer from "./likedislike.reducer";
var reducer = combineReducers({
    counter:counterReducer,
    todos:todoReducer,
    students:studentReducer,
    countries:countriesReducer,
    likedislike:likedislikeReducer
})

export default reducer;