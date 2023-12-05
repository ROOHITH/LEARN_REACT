import { useRef, useState, useEffect } from "react";
export default function UseRefDemo() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [names,setNames]=useState([]);
const addNames=()=>{

    setNames([...names,inputRef.current.value]);
}
  return (
    <>
    <div>
        {names.map((data,index)=>{
            return(<div key={index}>{data}</div>);
        })}
    </div>
      <input type="text" ref={inputRef}></input>
      <button onClick={addNames}>Add Names</button>
    </>
  );
}
