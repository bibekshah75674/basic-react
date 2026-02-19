import React, { useEffect } from 'react'
import { useState } from 'react'

export default function BlogPage() {
  const[name,setName] = useState("")

  useEffect(()=>{
    localStorage.setItem("userdata",JSON.stringify({name:"Bibek",address:"Lagankhel"}))
    const valuefromlocal = localStorage.getItem("userdata")
    const newRamroValue = JSON.parse(valuefromlocal)
    setName(newRamroValue)
  },[])

  const deleteA = ()=>{
    localStorage.removeItem("userdata");
  }
  return (
    <>
    <div>
      Name is {name.name} and 
      Address is {name.address}
    </div>

      <button onClick={deleteA}>Delete</button>
    </>
  )
}

