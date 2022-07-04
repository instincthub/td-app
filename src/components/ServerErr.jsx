import React from "react";

export const ServerErr = () =>{
  return (
     <div className="container server_err mb-1">
     <h3>Can't connect to the server!</h3>
     <a href="https://wa.me/message/5IA2QYCI53SUM1" target="_blank" rel="noreferrer">
       <button className="d-inline-block important-btn">
         <span>Report Issue</span>
       </button>
     </a>
   </div>
    
  );

}