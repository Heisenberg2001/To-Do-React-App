import React, { useState } from "react";

function Input({ addlist }) {
  const [inputtext, setInputText] = useState(" ");
  function handle(e) {
    setInputText(e.target.value);
  }
  let handleclick = ()=>{
    addlist(inputtext)
    setInputText('')
  }
let handleClickDown =(e)=>{
    if(e.keyCode === 13){
        addlist(inputtext)
        setInputText('')
    }

}

  return (
    <>
      <h1>To-Do App</h1>
      <input type="text" placeholder="Enter Your Task" onChange={handle} value = {inputtext} onKeyDown={handleClickDown}/>
      <button
        onClick={handleclick}
      >
        +
      </button>
    </>
  );
}

export default Input;
