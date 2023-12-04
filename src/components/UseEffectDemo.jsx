import { useState,useEffect } from "react";
export default function UseEffectDemo(){
    const[name,setName]=useState([]);

    fetch("/names.json")
    .then(response=>response.json())
    .then((data)=>setName(data));

    return(<>
    <h4>{name.join(",")}</h4>
    </>);
}
