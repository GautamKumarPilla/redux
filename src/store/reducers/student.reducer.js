const initialState = {
    students:[
       {
           firstname: 'sachin',
           lastname : 'tendulkar',
           gender : 'male'
       },
       {
           firstname: 'dhoni',
           lastname : 'singh',
           gender : 'male'
       },{
           firstname: 'virat',
           lastname : 'kohli',
           gender : 'male'
       }
    ]
}

 function studentReducer(state=initialState,action){
    return state;
 }
 
 export default studentReducer;