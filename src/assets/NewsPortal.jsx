import React, { useEffect } from 'react'
import { useState } from 'react'

export default function NewsPortal() {
    const[users,setUsers]=useState([])
    const[category,setCategory]=useState("all")

    const fetchUsers = async()=>{
        try{
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5865c8ebaff4422f8b416b4b62ef7489`;
            if(category === "all"){
                url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5865c8ebaff4422f8b416b4b62ef7489`;
            } else{
                url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5865c8ebaff4422f8b416b4b62ef7489`;
            }
            const response = await fetch(url);
            const finalResult = await response.json();
            setUsers(finalResult.articles)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[category])

  return (
    <>
    <div className="container bg-white">
    <h1 className='heading flex justify-center text-3xl font-medium'>Todays Headlines</h1>
    <div className='buttons flex justify-center gap-4 m-4'>
    <button className="button px-4 py-2 rounded-full border-2 border-amber-950 text-amber-950 font-semibold
               hover:bg-amber-950 hover:text-white transition-colors duration-300" onClick={()=>setCategory("all")}>All</button>
    <button className="button px-4 py-2 rounded-full border-2 border-amber-950 text-amber-950 font-semibold
               hover:bg-amber-950 hover:text-white transition-colors duration-300" onClick={()=>setCategory("business")}>Business</button>
    <button className="button px-4 py-2 rounded-full border-2 border-amber-950 text-amber-950 font-semibold
               hover:bg-amber-950 hover:text-white transition-colors duration-300" onClick={()=>setCategory("entertainment")}>Entertainment</button>
    <button className="button px-4 py-2 rounded-full border-2 border-amber-950 text-amber-950 font-semibold
               hover:bg-amber-950 hover:text-white transition-colors duration-300" onClick={()=>setCategory("science")}>Science</button>
    <button className="button px-4 py-2 rounded-full border-2 border-amber-950 text-amber-950 font-semibold
               hover:bg-amber-950 hover:text-white transition-colors duration-300" onClick={()=>setCategory("sports")}>Sports</button>
    </div>
      <div className='grid grid-cols-3 m-4 gap-4'>
        {
            users?.map((item,index)=>(
                <div key={index} className="border border-gray-300 rounded-lg p-4">
                    <img src={item.urlToImage} alt="" />
                    <h1>{item.title}</h1>
                </div>
            ))
        }
      </div>
      </div>
    </>
  )
}