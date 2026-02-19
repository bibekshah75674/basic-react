import React from 'react'
import { useEffect, useRef, useState } from "react"


export const UserList = () =>{
  const[users,setUsers] = useState([])
  const[count,setCount] = useState(0)
  const[query,setQuery] = useState("nepal")

  const inputRef = useRef();

  const handleFocus = ()=>{
    inputRef.current.style.backgroundColor = "yellow";
  }

  // Function
  const fetchUsers = async()=>{
    console.log("Function is calling")
    try{
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2026-02-16&to=2026-02-16&sortBy=popularity&apiKey=68bdb3d4642e467db3702c03e1a1a53b`);
      const finalResult = await response.json();
      setUsers(finalResult.articles)
    } catch(error){
      console.log(error)
    }
  }

  console.log(users);

  //Function 
  const showAlert=()=>{
    alert("This is the alert from useEffect.");
  }

  // Calling functions in useEffect where all functions dependencies is the count means as count update the function too runs 
  useEffect(()=>{
    fetchUsers();
    showAlert();
  },[count])
  
   return (
    <>
      <h1>Hello world</h1>
      <div>
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
      </div>
      <button>Fetch news</button>
      
      <input type="text" className="border-red-400 outline-2"  value={query} onChange={(e)=>setQuery(e.target.value)} />

      <div>
        {users?.map((item,index)=>(
          <div key={index}>
            <h1>{item.title}</h1>
            <img src={item.urlToImage} alt="" />
          </div>
        ))}
      </div>

        <input type='text' ref={inputRef}></input>
        <button onClick={handleFocus}>Focus</button>
    </>
  )
}
