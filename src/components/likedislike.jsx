import React from "react";
import { connect } from "react-redux";

function Likedislike(props){
    function like(){
        props.dispatch({type:'LIKE'})
    }
    function dislike(){
        props.dispatch({type:'DISLIKE'})
    }
    return (
        <div className="betterview">
    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" width={'10%'} alt="" onClick={like}/><h1 style={{marginLeft:'65px',marginTop:'-20px'}}>{props.likedislike.likes}</h1>
        <img src="https://cdn.vox-cdn.com/thumbor/renieqhOb2D3bgExxW5TlR4jgy0=/0x0:5733x4300/1200x800/filters:focal(2408x1692:3324x2608)/cdn.vox-cdn.com/uploads/chorus_image/image/63705087/shutterstock_113399083.0.1467092901.0.jpg" width={'7%'} alt="" onClick={dislike}/> <h1 style={{marginLeft:'65px',marginTop:'-20px'}}>{props.likedislike.dislikes}</h1>
          {/* <button onClick={like}>Like</button>&nbsp;&nbsp;&nbsp;
          <button onClick={dislike}>Dislike</button> */}
        </div>
    )
}
export default connect(function(store){return store})(Likedislike) 