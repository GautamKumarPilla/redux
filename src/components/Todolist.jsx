import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addTodo,deleteTodo } from "../store/actions";
function Todolist(props){
     const [newtask,setNewtask] = useState('')
     function addTask(){
        props.dispatch(addTodo(newtask))
     }
     function deleteTask(i){
        props.dispatch(deleteTodo(i))
     }
    return (
        <div>
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={addTask}>Add Task</button>
            {
             props.todos.todos.map((t,i) =>{
                return(<li>                            
                  {t}
                  <button onClick={()=>{deleteTask(i)}}>Delete</button>
                </li>)
             })
            }
        </div>
    )
}
export default connect(function(store){return store}) (Todolist);