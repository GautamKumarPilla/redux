const initialState={
    countries:[]
}
function countriesReducer(state=initialState,action){
    if(action.type==='GETCOUNTRIES'){
        return {...state,countries:action.payload}
    }
    return state
}

export default countriesReducer;