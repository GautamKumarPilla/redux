import React from "react";
import { connect } from "react-redux";
import { decCounter, incCounter, resCounter } from "../store/actions";

function Counter(props){
    
    return (
        <div className="betterview">
          <h1>Count:{props.count}</h1>
          <button onClick={props.inc} className="btn btn-outline-success opacity-50">Increment</button>&nbsp;&nbsp;&nbsp;
          <button onClick={props.dec} className="btn btn-outline-danger opacity-50">Decrement</button>&nbsp;&nbsp;&nbsp;
          <button onClick={props.res} className="btn btn-outline-primary opacity-50">Reset</button>
        </div>
    )
}
function mapStateToProps(state){return state.counter}
function mapDispatchToProps(dispatch){return {
    inc: ()=>{dispatch(incCounter())},
    dec: ()=>{dispatch(decCounter())},
    res: ()=>{dispatch(resCounter())}
}}
export default connect(mapStateToProps,mapDispatchToProps)(Counter) 