import { useState } from "react";

export default function UseStateFunction() {
  const [count, setCount] = useState(0);
  const [nameList, setNameList] = useState(["name", "is", "rohith"]);
  function AddToarray(e) {
    alert(e.taraget.value);
    setNameList([...nameList, e.taraget.value]);
  }

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click me {count}
      </button>
      <div>
        {
          <ul>
            {nameList.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
          </ul>
        }
      </div>
      <input
        type="text"
        onChange={(e) => {   
          AddToarray(e)
        }}
      />
    </>
  );
}
