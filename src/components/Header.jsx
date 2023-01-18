import React from "react";

const defaultStyle ={
    backgroundColor:"orange",
    padding:"15px 10px",
    color:"white",
    
}



function Header(){
    return(
        <h1 className="headertxt" style={defaultStyle}>Keeper</h1>
    )
}


export default Header