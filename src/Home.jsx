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

// import React, { useState } from 'react'
// import axios from 'axios'

// export default function Home() {
//     const [category, setCategory] = useState([]);

//     const[title,setTitle] = useState("")
//     const[description,setDescription] = useState("")
//     const[status,setStatus] = useState(false)

//     const fetchcategory = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/category/getAll");
//       console.log(res.data);
//       setCategory(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//     const addCategory = async()=>{
//         try{
//             const res = await axios.post("http://localhost:8000/category/create",{
//                 title:title,
//                 description:description,
//                 status:status
//             })
//             console.log(res.data)
//             setTitle("");
//             setDescription("");
//             setStatus(false);
//             fetchcategory();
//         } catch (error){
//             console.log(error)
//         }
//     }

//   return (
//     <>
//     <button className="bg-amber-400 m-4 rounded px-2 py-1" onClick={fetchcategory}>Load Categories</button>
//     <div className="grid grid-cols-3 m-4 gap-4">
//          {category.map((item, index) => (
//           <div key={index} className="border-2">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <p>{item.status ? "Active" : "Inactive"}</p>
//           </div>
//         ))}
//       </div>

//       <div className='flex flex-col'>

//         <input className='ml-4' type="text" value={title} placeholder='category title' onChange={(e)=>setTitle(e.target.value)} />

//         <input className='ml-4' type="text" value={description} placeholder='category description' onChange={(e)=>setDescription(e.target.value)} />

//         <input
//           type="checkbox" checked={status}
//           onChange={(e) => setStatus(e.target.checked)}
//         />

//         <button onClick={addCategory} className='bg-amber-400 rounded m-4'>Post</button>

//       </div>
//     </>
//   )
// }

import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const [blog, setBlog] = useState([]);
  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const fetchBlog = async () => {
    try {
      const res = await axios.get("http://localhost:8000/blog/getAll");
      console.log(res.data);
      setBlog(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // fetch all categories for dropdown
  const fetchCategories = async()=>{
    try{
      const res = await axios.get("http://localhost:8000/category/getAll")
      setCategories(res.data)
    } catch(err){
      console.log(err)
    }
  }

  const addBlog = async () => {
    try {
      const res = await axios.post("http://localhost:8000/blog/create", {
        title: title,
        description: description,
        category: category,
        author: author,
        image: image,
      });
      console.log(res.data);
      setTitle("");
      setDescription("");
      setCategory("");
      setAuthor("");
      setImage("");
      fetchBlog();
    } catch (error) {
      console.log(error);
    }
  };

  const editBlog = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setCategory(item.category);
    setAuthor(item.author);
    setImage(item.image);

    setEditId(item._id);
    setIsEditing(true);
  };

  const updateBlog = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8000/blog/update/${editId}`,
        {
          title,
          description,
          category,
          author,
          image,
        },
      );
      console.log(res.data);
      setTitle("");
      setDescription("");
      setCategory("");
      setAuthor("");
      setImage("");
      setEditId(null);
      setIsEditing(false);
      fetchBlog();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/blog/delete/${id}`);
      fetchBlog();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchCategories();
  }, []);

  return (
    <><div className="container bg-gray-100">
      <div className="flex justify-center">
        <h1 className="m-4 text-4xl font-medium text-amber-500">
          Latest Blogs
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-6 p-6">
        {blog.map((item, index) => (
          <div key={item._id} className="bg-white rounded-xl border-2 overflow-hidden ">

            {/* <img src="{item.image}" alt="{item.title}" /> */}
            <img src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?cs=srgb&dl=pexels-pixabay-261662.jpg&fm=jpg" alt="{item.title}" />

            <div className="">
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
            </div>

            <p className="text-gray-600 text-sm mt-2 ">{item.description}</p>

            <div className="mt-3 text-sm text-gray-500">
            <p>Category:{item.category?.title || "Uncategorized"}</p>
            <p>{item.author}</p>
            </div>


            <p>Date:{item.date}</p>
            
            <div className="flex flex-row justify-end gap-1.5 p-2">
            <button
              onClick={() => editBlog(item)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              onClick={() => deleteBlog(item._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
             </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="ml-4 text-4xl font-medium text-amber-500">Edit/Post a blog</h2>

        <input
          className="ml-4 border-2 rounded-2xl p-2"
          type="text"
          value={title}
          placeholder="category title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="ml-4 border-2 rounded-2xl p-2"
          type="text"
          value={description}
          placeholder="category description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="ml-4 border-2 rounded-2xl p-2"
          type="text"
          value={author}
          placeholder="blog author"
          onChange={(e) => setAuthor(e.target.value)}
        />
{/* 
        <input
          className="ml-4 border-2 rounded-2xl p-2"
          type="text"
          value={category}
          placeholder="Blog Category"
          onChange={(e) => setCategory(e.target.value)}
        /> */}

        <select className="ml-4 border-2 rounded-2xl p-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat)=>(
            <option key={cat._id} value={cat._id}>{cat.title}</option>
          ))}
        </select>

        <input
          className="ml-4 border-2 rounded-2xl p-2"
          type="text"
          value={image}
          placeholder="Blog Image"
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          onClick={isEditing ? updateBlog : addBlog}
          className="bg-amber-500 rounded m-4"
        >
          {isEditing ? "Update Blog" : "Post Blog"}
        </button>
      </div>
      </div>
    </>
  );
}
