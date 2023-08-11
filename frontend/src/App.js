 
import { useEffect, useState } from 'react';
import './App.css';
import ChoseColor from './components/ChooseColor';
import {init, subscribe} from "./socketApi";

function App() {
  const [activeColor,setActiveColor]=useState("#282c34");

  useEffect(()=>{
    init();
    subscribe((color) => {
      setActiveColor(color);
    });
  },[])

  return ( 
    <div className="App" style={{backgroundColor:activeColor}}>
       <ChoseColor activeColor={activeColor}/>
    </div>
  );
}

export default App;
