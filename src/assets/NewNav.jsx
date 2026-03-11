import React from 'react'
import { Link } from 'react-router-dom'

function NewNav(props) {
  return (
    <>
    <div className='flex justify-between items-center p-8 bg-orange-500 sticky top-0'>
      <div className='text-4xl font-medium text-amber-50'>
        <h1>{props.title}</h1>
      </div>
      <div>
        <ul className='flex justify-between items-center gap-4 text-xl'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="newblog">NewBlog</Link></li>
          <li><Link to="blogs">Blog</Link></li>
          <li><Link to="blogform">Blog Form</Link></li>
          <li><Link to="courses">Courses</Link></li>
          {/* <li><Link to="textform">TextForm</Link></li> */}
          <li><Link to="news">News</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <button className='text-lg bg-amber-50 text-orange-500 px-4 py-1 rounded-lg hover:bg-amber-200 transition'>Login</button>
      </div>
      </div>
    </>
  )
}

export default NewNav
