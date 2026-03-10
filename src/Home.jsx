// import React, { useState } from 'react'

// export default function Home() {
//     const[category,setcategory] = useState([])
//     const fetchcategory  = async()=>{
//         try{
//         const res = await fetch("http://localhost:8000/category/getAll")
//         const datafromapi = await res.json()
//         console.log(datafromapi)
//         setcategory(datafromapi)
//         } catch(error){
//             console.log(error)
//         }
//     }
//   return (
//     <>
//       <p>This is the home page</p>

//       <div className='flex flex-col'>
//         <input type="text" name="" id="" placeholder='category title'/>
//         <input type="description" placeholder='category description' />
//         <input type="checkbox" />
//         <button className='bg-amber-400' onClick={fetchcategory}>submit</button>
//       </div>
//       <div className='grid grid-cols-3 m-4 gap-4'>
//       {
//         category.map((item,index)=>(
//             <div key={index} className='border-2'>
//                 <h1>{item.title}</h1>
//                 <p>{item.description}</p>
//                 <p>{item.status}</p>
//             </div>
//         ))
//       }
//       </div>
//     </>
//   )
// }

// import React, { useState } from "react";
// import axios from "axios";

// export default function Home() {
//   const [category, setCategory] = useState([]);

//   const fetchcategory = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/category/getAll");
//       console.log(res.data);
//       setCategory(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <p>This is the home page</p>

//       <button className="bg-amber-400" onClick={fetchcategory}>
//         Load Categories
//       </button>

//       <div className="grid grid-cols-3 m-4 gap-4">
//         {category.map((item, index) => (
//           <div key={index} className="border-2">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <p>{item.status}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {
    const [category, setCategory] = useState([]);

    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[status,setStatus] = useState(false)

    const fetchcategory = async () => {
    try {
      const res = await axios.get("http://localhost:8000/category/getAll");
      console.log(res.data);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };


    const addCategory = async()=>{
        try{
            const res = await axios.post("http://localhost:8000/category/create",{
                title:title,
                description:description,
                status:status
            })
            console.log(res.data)
            setTitle("");
            setDescription("");
            setStatus(false);
            fetchcategory();
        } catch (error){
            console.log(error)
        }
    }
    

  return (
    <>
    <button className="bg-amber-400 m-4 rounded px-2 py-1" onClick={fetchcategory}>Load Categories</button>
    <div className="grid grid-cols-3 m-4 gap-4">
         {category.map((item, index) => (
          <div key={index} className="border-2">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.status ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </div>


      <div className='flex flex-col'>

        <input className='ml-4' type="text" value={title} placeholder='category title' onChange={(e)=>setTitle(e.target.value)} />

        <input className='ml-4' type="text" value={description} placeholder='category description' onChange={(e)=>setDescription(e.target.value)} />

        <input
          type="checkbox" checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />

        <button onClick={addCategory} className='bg-amber-400 rounded m-4'>Post</button>

      </div>
    </>
  )
}