import Input from "./Component/Input";
import React, {useState} from "react";
import Output from "./Component/Output";

function App() {
  const [list, setlist] = useState([]);
  let addlist = (inputtext) => {
    if(inputtext !== '')
      setlist([...list, inputtext]);
  };

  const ondelete=(key)=>{
    let newlist = [...list]
    newlist.splice(key , 1)
    setlist([...newlist])
   } 

  return (
    <>
      <Input addlist={addlist} />
      <hr/>
      {
        list.map((listitem, i)=>{
          return <Output key ={i} item={listitem}  delete={ondelete} index={i}/>
        })
      }
    </>
  );
}

export default App;
