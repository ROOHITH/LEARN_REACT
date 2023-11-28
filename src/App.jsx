import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Profile';
import { Parent } from './components/Parent';
function App() {
  return(<>
  <Gallery reactLogo={reactLogo}viteLogo={viteLogo}/>
  <Parent>
    <img src={reactLogo} alt="demo of children"/>
  </Parent>
  </>);
}

export default App
