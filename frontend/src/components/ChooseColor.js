import React, { useState } from 'react'
import {send} from "../socketApi"

function ChooseColor({activeColor}) {
  const [color,setColor] = useState("#000000");
  return (
    <div className='palet'>
      <input type="color" value={activeColor} onChange={(e) => setColor(e.target.value)}></input>
      <button onClick={() => send(color)}>Click</button>
      {color}
    </div>
  )
}

export default ChooseColor