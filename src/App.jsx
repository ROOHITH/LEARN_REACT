import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Profile';
function App() {
  return(<>
  <Gallery reactLogo={reactLogo}viteLogo={viteLogo}/>
  </>);
}

export default App
