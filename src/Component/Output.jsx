import React from "react"

function Output(props) {


  return (
    <>
    <li>
        {props.item}
        <span>
        <i className="fa-solid fa-trash-can" onClick={()=>{
            props.delete(props.index)
            
        }}></i>
        </span>
    </li>
    
    </>
  )
}

export default Output