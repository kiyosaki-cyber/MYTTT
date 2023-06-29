import React from "react";

 export default function square({symbol,cellClicked}){
    return(
    <button className="grid--cells" onClick={cellClicked}>{symbol}</button>

  
    )
 }