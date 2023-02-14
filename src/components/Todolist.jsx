import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo,deleteTodo } from "../store/actions";
function Todolist(props){
   console.log(props)
     const [newtask,setNewtask] = useState('')
   //   function addTask(){
   //      props.dispatch(addTodo(newtask))
   //   }
     function deleteTask(i){
        props.dispatch(deleteTodo(i))
     }
    return (
        <div>
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={() =>{props.handlenewtask(newtask)}}>Add Task</button>
            {
             props.alltodos.map((t,i) =>{ 
                return(<li>                            
                  {t}
                  <button onClick={()=>{props.deleteTask(i)}}>Delete</button>
                </li>)
             })
            }
        </div>
    )
}
export default connect(function(state){return state.todos},
function(dispatch) {
   return {
     handlenewtask:(nt)=>{dispatch({type:'ADDTASK',payload:nt})},
     deletetask:(n)=>{dispatch({type:'DELETETASK',payload:n})}
}}) (Todolist);