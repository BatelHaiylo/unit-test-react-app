import { useState } from 'react';
import './App.css';

export default function App() {
  const [textInput,setTextInput] = useState("")
  const [textvalue,setTextValue] = useState("")

  const activeInput = (e) => {setTextInput(e.target.value)}
  const popAlert = () => {setTextValue(textInput)}
  return (
    <div className="App">
      <code>src/home</code>
      <h1 data-testid="app-comp-home-h1" className='app-h1'>Home</h1>
      <label htmlFor='textInput'>enter your name</label>
      <input type="text" name="textInput" data-testid="app-comp-input" onChange={(e) => {activeInput(e)}} ></input>
      <button data-testid="app-comp-home-click-btn" className='app-first-btn' onClick={popAlert}>CLICK</button>
      <h1 data-testid="app-comp-home-afterclick-header">{textvalue}</h1>
    </div>
  );
}