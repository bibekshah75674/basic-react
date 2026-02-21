import React, { useEffect } from "react";
import { useState } from "react";

const BlogPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const[selectedCategory,setSelectedCategory] = useState("all");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const [blogs, setBlogs] = useState([
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
  ]);

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

    setBlogs([...blogs, newblog]);
    setTitle("");
    setDescription("");
    setCategory("");
    setAuthor("");
    setDate("");
  };

  const submit = () => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  };

  useEffect(() => {
    const valuefromlocal = localStorage.getItem("blogs");
    if (valuefromlocal) {
      const properValue = JSON.parse(valuefromlocal);
      setBlogs(properValue);
    }
  }, []);

  // Delete Blog
  const deleteBlog = (indexToDelete) => {
    const updatedBlog = blogs.filter((item, index) => index !== indexToDelete);
    setBlogs(updatedBlog);
  };

  const filteredByCategory = selectedCategory === "all" ? blogs :blogs.filter((item,index)=>item.category === selectedCategory);

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
              Add Blog
            </button>
          </div>

          {/* categories */}
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-semibold text-orange-600 flex justify-center">
              Browse by categories
            </span>
            <div className="categories-btns flex-1 flex flex-row justify-center">
              <button
                className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition ml-8 mb-10 font-semibold text-lg"
                onClick={()=>setSelectedCategory("all")}
              >
                All
              </button>
              <button
                className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition ml-8 mb-10 font-semibold text-lg"
                onClick={()=>setSelectedCategory("Technology")}
              >
                Technology
              </button>
              <button
                className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition ml-8 mb-10 font-semibold text-lg"
                onClick={()=>setSelectedCategory("Design")}
              >
                Design
              </button>
              <button
                className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition ml-8 mb-10 font-semibold text-lg"
                onClick={()=>setSelectedCategory("Health")}
              >
                Health
              </button>
              <button
                className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition ml-8 mb-10 font-semibold text-lg"
                onClick={()=>setSelectedCategory("Travel")}
              >
                Travel
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 m-8 mt-0 gap-4">
          {filteredByCategory.map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4"
            >
              <img
                className="w-full h-64 object-cover rounded-t-lg mb-2"
                src={item.image}
                alt={item.title}
              />

              <div className="flex flex-col justify-around h-52">
                <h2 className="text-xl font-medium  text-gray-800 hover:text-orange-500 transition">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm  line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap text-sm text-gray-500 gap-4 ">
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    📂{item.category}
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    ✍{item.author}
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    📅{item.date}
                  </span>
                </div>

                <div className="flex justify-between gap-1">
                  <button className="mt-auto bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded-lg transition w-full">
                    View
                  </button>
                  <button
                    className="mt-auto bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded-lg transition w-full"
                    onClick={() => {
                      deleteBlog(index);
                    }}
                  >
                    Delete blog
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button
            className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-lg transition ml-8 mb-10 font-semibold text-lg"
            onClick={submit}
          >
            Submit to local storage
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
