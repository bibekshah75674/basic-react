import React, { useEffect } from 'react'
import { useState } from 'react'

export default function BlogPage() {
    const[name,setName] = useState("")

    useEffect(()=>{
        localStorage.setItem("userdata",JSON.stringify({name:"Bibek",address:"lagankhel"}))
        const valuefromlocal = localStorage.getItem("userdata")
        const newRamroValue = JSON.parse(valuefromlocal)
        setName(newRamroValue)
    },[])

    const deleteA=()=>{
        localStorage.removeItem("userdata");
    }

    console.log(name)
  return (
    <div>
      name is {name.address}
      <button onClick={deleteA}>Delete</button>
    </div>
  )
}
