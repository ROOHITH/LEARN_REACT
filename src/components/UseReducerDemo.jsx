import { useReducer } from "react";
export default function UseReducerDemo() {

    const [state2,dispatch2]=useReducer((state2,action2)=>({
        ...state2,
        ...action2,
    }),{
        first_name:"",
        Second_name:"",
    })
  const [state,dispatch] = useReducer((state,action) => {
    switch(action.type){
        case "SET_NAME":
            return{...state,name:action.playload};
        case "Set_Name_in_array":
            return {
                ...state,
                names:[...state.names,state.name],
              //  name:"reset to rohith",
            }
    }
  }, {
    names: [],
    name: "",
  });

  return(<>
  <input type="text"value={state.name}onChange={e=>dispatch({type:"SET_NAME",playload:e.target.value})}></input>
 <div>Name= {state.name} </div>
 <button onClick={e=>{dispatch({type:"Set_Name_in_array"})}}>state name</button>
 <h4>state names array</h4>
 <ul>
    {state.names.map((data,index)=>{
        return(
            <li key={index}>{data}</li>
        )
    })}
 </ul>

 <h4>form </h4>
 <div>
    <form>
        <input type="text"onChange={(e)=>{dispatch2({first_name:e.target.value})}}placeholder="First Name" />
        <input type="text"onChange={(e)=>{dispatch2({Second_name:e.target.value})}}placeholder="Second Name" />

    </form>

   
        {state2.Second_name}
        {state2.first_name}

 </div>
  </>);
}
