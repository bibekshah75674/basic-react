import { useState } from 'react'

function State() {
    const [count,setCount] = useState(0);

    const [show,setShow] = useState(false);

    const[name,setName] = useState(false);

    const[color,setColor] = useState("grey");

  return (
    <>
      <h1>Count Manipulation</h1>
      <button onClick={()=>setCount(count+1)} className=''>Increase Count</button>
      <button onClick={()=>setCount(count-1)}>Decrease Count</button>
      <button onClick={()=>setCount(0)}>Reset Count</button>
      <button onClick={()=>setCount(count+10)}>Increase Count By 10</button>
      <button onClick={()=>setCount(count-10)}>Decrease Count By 10</button>

      {/* Display the value of count */}
      <h1>{count}</h1>

      {/* --------------------------------------------------------------- */}

      <div>
      <h2>Show/Hide Password</h2>

      <label htmlFor="password">Password:</label>
      <input type={show ? "text" : "password"} id="password"/>
      <button onClick={()=>setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </div>
      {/* ---------------------------------------------------------------- */}

      <button onClick={()=>setName(!name)}>{name ? "Hide" : "Show"}</button>
      <h1>{name ? `My name is Bibek` : ""}</h1>

      {/* ---------------------------------------------------------------- */}

      <div className='box' style={{height : 80, width : 80,borderRadius : 50,backgroundColor : `${color}`}}></div>

      <button onClick={()=>setColor("red")}>Red</button>
      <button onClick={()=>setColor("green")}>Green</button>
      <button onClick={()=>setColor("yellow")}>Yellow</button> 
    </>
  )
}
export default State;
