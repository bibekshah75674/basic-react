import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const[editIndex,setEditIndex] = useState(null);

  const [blogs, setBlogs] = useState(()=>{
    const savedBlogs = localStorage.getItem("blogs");
    if(savedBlogs){
        return JSON.parse(savedBlogs);
    } else{
        return[
    {
      id: 1,
      title: "Getting Started with React in 2026",
      description:
        "React is one of the most popular JavaScript libraries for building modern user interfaces. In this blog, we explore the fundamentals of components, state, and props to help beginners start their journey.",
      category: "Technology",
      author: "Bibek Shah",
      date: "21 Feb, 2026",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000",
    },
    {
      id: 2,
      title: "Why Tailwind CSS is Changing Frontend Development",
      description:
        "Tailwind CSS provides a utility-first approach to styling. It allows developers to build beautiful and responsive designs quickly without writing traditional CSS files.",
      category: "Design",
      author: "Bibek Shah",
      date: "20 Feb, 2026",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000",
    },
    {
      id: 3,
      title: "10 Tips for a Healthier Lifestyle",
      description:
        "Simple changes to your daily routine can improve your overall health and well-being. Learn the key tips for a healthier lifestyle.",
      category: "Health",
      author: "Bibek Shah",
      date: "19 Feb, 2026",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000",
    },
    {
      id: 4,
      title: "Exploring the World: Travel in 2026",
      description:
        "Traveling opens your mind and provides unforgettable experiences. Discover top destinations and travel tips for 2026.",
      category: "Travel",
      author: "Bibek Shah",
      date: "18 Feb, 2026",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
    },
    {
      id: 5,
      title: "Mastering JavaScript ES2026 Features",
      description:
        "JavaScript keeps evolving! Learn the latest ES2026 features to write cleaner and more efficient code.",
      category: "Technology",
      author: "Bibek Shah",
      date: "17 Feb, 2026",
      image:
        "https://www.scaler.com/blog/wp-content/uploads/2025/11/20251125_2213_JavaScript-Mastery-Plan_simple_compose_01kaxy9j3kew39jmk45hw9tppx-1.png",
    },
  ]

    }
  }
    
    );

  const addBlog = () => {
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      category.trim() === "" ||
      author.trim() === "" ||
      date.trim() === ""
    ) {
      alert("No fields must be empty.");
      return;
    }

    if(editIndex !== null){
        const updatedBlogs = blogs.map((blog,index)=>(
            index === editIndex ? {...blog,title,description,category,author,date}:blog
        ))
        setBlogs(updatedBlogs);
        setEditIndex(null); 
    } else{

    const newblog = {
      id: Date.now(),
      title: title,
      description: description,
      category: category,
      author: author,
      date: date,
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000",
    };

    setBlogs([...blogs, newblog])};

    setTitle("");
    setDescription("");
    setCategory("");
    setAuthor("");
    setDate("");
  };

  useEffect(()=>{
    localStorage.setItem("blogs", JSON.stringify(blogs));
  },[blogs])

  //delete blog
  const deleteBlog  = (indexToDelete)=>{
    const updatedBlog = blogs.filter((item,index)=> index !== indexToDelete)
    setBlogs(updatedBlog)
  }

  //blog to edit
  const blogToEdit = (index)=>{
    setTitle(blogs[index].title);
    setDescription(blogs[index].description);
    setCategory(blogs[index].category);
    setAuthor(blogs[index].author);
    setDate(blogs[index].date);

    setEditIndex(index);
  };


  return (
    <>
      <div className="parent bg-[#FBF8EE]">
        <div className="input-field grid grid-cols-1 m-8 mt-0">
          <h1 className="text-4xl font-semibold mb-2.5 text-orange-600 mt-4">
            Add a Blog
          </h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="blog-title" className="text-lg text-orange-600">
              Blog Title:{" "}
            </label>
            <input
              id="blog-title"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-600 transition "
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="blog-desc" className="text-lg text-orange-600">
              Description:{" "}
            </label>
            <textarea
              id="blog-desc"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-600 transition"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="blog-category" className="text-lg text-orange-600">
              Category:{" "}
            </label>
            <input
              id="blog-category"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-600 transition"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="blog-author" className="text-lg text-orange-600">
              Author:{" "}
            </label>
            <input
              id="blog-author"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-600 transition"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="blog-date" className="text-lg text-orange-600">
              Date:{" "}
            </label>
            <input
              id="blog-date"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-600 transition"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <button
              className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded-lg transition font-semibold text-base"
              onClick={addBlog}
            >
              {editIndex !== null ? "Update Blog" : "Add Blog"}
            </button>
          </div>

          <h1 className="text-2xl font-semibold text-orange-600 mt-4">All Blogs</h1>
          

          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-2 mb-4">
            <thead className="bg-orange-600 text-white">
                <tr>
                    <th className="px-4 py-2 text-left">SN</th>
                    <th className="px-4 py-2 text-left">Blog Title</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Author</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-center">Action</th>
                </tr>
            </thead>
            <tbody className="border-b hover:bg-orange-50 transition">
                {blogs.map((item,index)=>(
                    <tr key={item.id}>
                <td className="px-4 py-2">{index+1}</td>
                <td className="px-4 py-2 font-medium">{item.title}</td>
                <td className="px-4 py-2 max-w-xs truncate">{item.description}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.author}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2 text-center space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition" onClick={()=>{
                        blogToEdit(index)
                    }}>edit</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition" onClick={()=>{
                        deleteBlog(index);
                    }}>delete</button>
                </td>
                </tr>
                ))}
                </tbody>
            </table>  
          
        </div>
      </div>
    </>
  );
};

export default BlogForm;