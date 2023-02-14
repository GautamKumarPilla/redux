const initialState={
    alltodos:['job','helping','savings','bike']
}

function todoReducer(state=initialState,action){
    if(action.type==='ADDTASK'){
        return{...state,alltodos:[...state.alltodos,action.payload]}
    }
    if(action.type==='DELETETASK'){
        var temp = [...state.alltodos];
        temp.splice(action.payload,1);
        return {...state,alltodos:[...temp]}
    }
    return state;
 }
 
 export default todoReducer;