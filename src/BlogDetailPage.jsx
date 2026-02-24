import React from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const BlogDetailPage = () => {
    const {id} = useParams();
    const valuefromlocal = localStorage.getItem("blogs");

    let filteredBlogsById;
    if (valuefromlocal) {
      const properValue = JSON.parse(valuefromlocal);
      console.log(properValue)
      filteredBlogsById = properValue.find((item)=> (
        item.id === parseInt(id)
      ))
    } 
  return (
    <>
    <div className='m-8'>
    <h1>Blog id:{filteredBlogsById.id}</h1>
    <h1>{filteredBlogsById.title}</h1>
    <h1>{filteredBlogsById.description}</h1>
    <h1>{filteredBlogsById.author}</h1>
    <h1>{filteredBlogsById.date}</h1>
    <img src={filteredBlogsById.image} className='h-96 w-96'  alt="" />

    <Link to="/blogs">
    <button className='mt-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded-lg transition font-semibold text-base'>Back to Blogs</button>
    </Link>
    </div>
    </>
  )
}

export default BlogDetailPage

