import { ADDTASK,DELETETASK } from "./actiontype"   //action-creators
import axios from "axios"

export function addTodo(newtask){
    return {type:ADDTASK,payload:newtask}
}
export function deleteTodo(i){
    return {type:DELETETASK,payload:i}
 }
 export function incCounter(){
   return {type:"INC"}
 }
 export function decCounter(){
   return {type:"DEC"}
 }
 export function resCounter(){
   return {type:"RESET"}
 }

export function Likes(){
    return {type:'LIKE'}
}
export function Dislikes(){
  return {type:'DISLIKE'}
}
 export function getCountries(){
    return(dispatch)=> {axios.get("https://restcountries.com/v2/all").then((response) => {
          dispatch({type:'GETCOUNTRIES',payload:response.data})
     })}
    }
 