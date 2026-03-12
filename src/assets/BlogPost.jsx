import React, { useEffect } from 'react'
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Select } from '@mantine/core';
import axios from "axios";

function BlogPost() {
  const [categories, setCategories] = useState([]);
  const form = useForm({
    initialValues: { title: '',description: '',author:'',category:'',image:''},

    // functions will be used to validate values at corresponding key
    validate: {
      title: (value) => (value.length < 4 ? 'Title must have at least 4 letters' : null),
      description: (value) => (value.length < 30 ? 'Description must have at least 30 letters' : null),
      author:(value)=>(value.length < 2? 'Author name must have at least 2 letters':null),
      category:(value)=>(value === ''? 'Please select a category':null),
      image:(value)=>(value === ''? 'Please enter an image URL':null)
   
    },
  });

const addBlog = async (values) => {
    try {
      const res = await axios.post("http://localhost:8000/blog/create", values);
      console.log(res.data);
      alert("Blog added successfully");
      form.reset()
    } catch (error) {
      console.log(error);
    }
  };

   // fetch all categories for dropdown
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8000/category/getAll");
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchCategories();
  },[]);
  return (
    <>
    
    <div className="">
          <h1 className="m-4 text-4xl font-medium text-amber-500">
            Post your own blog here
          </h1>
        </div>
      <form onSubmit={form.onSubmit(addBlog)} className='m-4'>
      <TextInput
        label="Blog Title"
        placeholder="Blog Title"
        {...form.getInputProps('title')}
      />
      <TextInput
        label="Description"
        placeholder="Description"
        {...form.getInputProps('description')}
      />
      <TextInput
        label="Author"
        placeholder="Author"
        {...form.getInputProps('author')}
      />

      <Select
      label="Category"
      placeholder="--select category--"
      data={[{ value: '', label: '--select category--' }, ...categories.map((cat) => ({ value: cat._id, label: cat.title }))]}
          {...form.getInputProps('category')}
    />

    <TextInput
        label="Image"
        placeholder="Image URL"
        {...form.getInputProps('image')}
      />
      
      <Button type="submit" mt="sm" >
        Post
      </Button>
      </form>
    </>
  )
}

export default BlogPost
