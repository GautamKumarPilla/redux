import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCountries } from "../store/actions";

function Countries(props){
    // console.log(props)
    React.useEffect(()=>{
        props.dispatch(getCountries());
      },[])
    return(
        <div className="betterview">
            <h1>Countries</h1>
            <ul>
                {
                    props.countries.countries.map((country) =>{
                                return (<table border={'2px'} cellPadding={'15px'} cellSpacing={'10px'} align={'center'} Valign={'middle'}>
                                <tr><td rowSpan={6}>{country.name}</td></tr>
                                <tr><td rowSpan={6}>{country.capital}</td></tr>
                                <tr><td rowSpan={6}>{country.population}</td></tr>
                                </table>)
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store=>store)(Countries)