import { ADDTASK,DELETETASK } from "./actiontype"
export function addTodo(task){
    return {type:ADDTASK,payload:task}
}
export function deleteTodo(i){
    return {type:DELETETASK,payload:i}
 }
 export function getCountries(){
    return (dispatch) =>
    { fetch("https://restcountries.com/v2/all")
       .then(res => res.json())
       .then(Countries =>{dispatch({type:'UPDATECOUNTRIES',payload:Countries})})
    }
 }