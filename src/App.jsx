import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./components/Profile";
import { Parent } from "./components/Parent";
import Toolbar from "./components/Button";
import { sculptureList } from "./components/Data";
import { NextButton } from "./components/NextButton";
import UseStateFunction from "./components/UseState";
import Hr from "./components/Hr";
import UseReducerDemo from "./components/UseReducerDemo";
import UseMemoAndUseCallBack from'./components/UseMemoAndUseCallBack';
import UseEffectDemo from'./components/UseEffectDemo';
import UseRefDemo from'./components/UseRefDemo';
function App() {
  const [current, setCurrent] = useState(sculptureList.length > 1 ? 0 : null);
  return (
    <>
      <Gallery reactLogo={reactLogo} viteLogo={viteLogo} />
      <Hr />
      <Parent>
        <img src={reactLogo} alt="demo of children" />
      </Parent>
      <Hr />
      <Toolbar />
      <Hr />
      <div className="gallery">
        <NextButton
          current={current}
          setCurrent={setCurrent}
          dataLength={sculptureList.length - 1}
        >
          Next
        </NextButton>
        <h1>{sculptureList[current].name}</h1>
        <span>
          {current + 1} of {sculptureList.length}
        </span>
        <img src={sculptureList[current].url}></img>
      </div>
      <Hr head={"UseState"} />
      <UseStateFunction />
      <Hr head={"UseReducer"} />
      <UseReducerDemo />
      <Hr head={"Use memo and use callback"} />
      <UseMemoAndUseCallBack/>
      <Hr head={"Use effect"} />
      <UseEffectDemo/>
      <Hr head={"Use Ref"} />
      <UseRefDemo />
    </>
  );
}

export default App;
