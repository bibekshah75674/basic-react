import React, { useEffect } from 'react'
import { useState } from 'react'

export default function BlogPage() {
  // const[name,setName] = useState("")

  const[title,setTitle] = useState("")
  const[description,setDescription] = useState("")
  const[category,setCategory] = useState("")
  const[author,setAuthor] = useState("")

  const[blogs,setBlogs] = useState([
    {
      id:1,
      title:"title 1",
      description:"desc 1",
      category:"tech",
      author:"bibek",
      date:"1st Jan 2026",
      image:""
    }
  ])

  const addBlog = ()=>{
    if(title.trim === ""){
      alert("Enter the title");
      return ;
    } 

    const newblog = {
      id:Date.now(),
      title:title,
      description:description,
      category:category,
      author:author
    }
  //  const newblog = {
  //   id:blogs.length + 1,
  //   title:title,
  //   description:description,
  //   category:category,
  //   author:author,
    
  // }

  // setBlogs([...blogs,newblog])
  // setTitle("");
  // setDescription(""); 
  // setCategory("");
  // setAuthor("");
  // }

  // useEffect(()=>{
  //   localStorage.setItem("userdata",JSON.stringify({name:"Bibek",address:"Lagankhel"}))
  //   const valuefromlocal = localStorage.getItem("userdata")
  //   const newRamroValue = JSON.parse(valuefromlocal)
  //   setName(newRamroValue)
  // },[])

  // const deleteA = ()=>{
  //   localStorage.removeItem("userdata");
  // }

  const submit = ()=>{
    localStorage.setItem("blogs",JSON.stringify(blogs));
  }

  return (
    <>
    {/* <div>
      Name is {name.name} and 
      Address is {name.address}
    </div> */}

      {/* <button onClick={deleteA}>Delete</button>
       */}
      {/* <div>
        <button onClick={submit}>Submit to local storage</button>
      </div> */}

      <div className='m-2'>
      <label htmlFor="blog-title">Blog Title: </label> 
      <input id='blog-title' className='outline-1' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>

       <div className='m-2'>
      <label htmlFor="blog-desc">Description: </label> 
      <input id='blog-desc' className='outline-1' type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </div> 

      <div className='m-2'>
      <label htmlFor="blog-category">Category: </label> 
      <input id='blog-category' className='outline-1' type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/>
      </div>  

      <div className='m-2'>  
      <label htmlFor="blog-author">Author: </label> 
      <input id='blog-author' className='outline-1' type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
      </div>

      <div>
        <button className='outline-1 m-2' onClick={submit}>Submit to local storage</button>
      </div>
    </> 
  )
}
}
