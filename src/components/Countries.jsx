import React from "react";
import { connect } from "react-redux";
import { getCountries } from "../store/actions";

function Countries(props){
      console.log(props)
    React.useEffect(()=>{
        props.loadCountries()
      },[])
    return(
        <div className="betterview">
            <h1>Countries</h1><br />
          <ul type="circle" className="d-flex flex-wrap border">
            {
              props.countries.map((c) => {
                return <li className="w-25" style={{width:'200px'}}>{c.name}</li>
              })
            }
          </ul>
        </div>
    )
}
function mapStateToProps(state){return state.countries}
function mapDispatchToProps(dispatch){return { 
      loadCountries : ()=> {dispatch(getCountries())}
    }}
export default connect(mapStateToProps,mapDispatchToProps)(Countries);