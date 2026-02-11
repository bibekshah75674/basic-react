import { useState } from "react";
import { CourseCard } from "./CourseCard";
import mernImage from "./images/mernimage.png";

const CourseLists = ()=> {
    const [courses,setCourses] = useState([
        {
    id: 1,
    image: mernImage,
    name: "MERN Training in Nepal",
    description: "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on...",
    category: "MERN",
    totalWeeks: 12,
    lessons : 1,
    instructor : "Suryaraj Timsina"
  },
  {
    id: 2,
    image: mernImage,
    name: "MERN Course",
    description: "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on...",
    category: "MERN",
    totalWeeks: 12,
    lessons : 1,
    instructor : "Suryaraj Timsina"
  },
  {
    id: 3,
    image: mernImage,
    name: "Data Science with Python programming",
    description: "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on...",
    category: "Data Science",
    totalWeeks: 12,
    lessons : 1,
    instructor : "Suryaraj Timsina"
  },
  {
    id: 4,
    image: mernImage,
    name: "Data Engineering",
    description: "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on...",
    category: "Data Science",
    totalWeeks: 12,
    lessons : 1,
    instructor : "Suryaraj Timsina"
  },
  {
    id: 5,
    image: mernImage,
    name: "Comprehensive Digital Marketing Course",
    description: "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on...",
    category: "Digital marketing",
    totalWeeks: 12,
    lessons : 1,
    instructor : "Suryaraj Timsina"
  },
  {
    id: 6,
    image: mernImage,
    name: "Digital Marketing",
    description: "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on...",
    category: "Digital marketing",
    totalWeeks: 12,
    lessons : 1,
    instructor : "Suryaraj Timsina"
  },
  {
    id: 7,
    image: mernImage,
    name: "Digital Marketing Training In Nepal",
    description: "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on...",
    category: "Digital marketing",
    totalWeeks: 12,
    lessons : 1,
    instructor : "Suryaraj Timsina"
  },
  {
    id: 8,
    image: mernImage,
    name: "UI/UX",
    description: "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on...",
    category: "UI/UX",
    totalWeeks: 12,
    lessons : 1,
    instructor : "Suryaraj Timsina"
  }
    ])

    const [category,setCategory] = useState("All");
    const filterCourses = category === "All" ? courses : courses.filter((item,index)=>(
        item.category === category
    ))

    return(
        <>
        <div className="flex justify-evenly gap-8 items-center mb-4 m-8">
                <button className="px-10 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors" onClick={() => setCategory("All")}>All</button>

                <button className="px-10 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors" onClick={() => setCategory("MERN")}>MERN</button>

                <button className="px-10 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors" onClick={() => setCategory("Data Science")}>Data Science</button>

                <button className="px-10 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors" onClick={() => setCategory("Digital marketing")}>Digital marketing</button>

                <button className="px-10 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors" onClick={() => setCategory("UI/UX")}>UI/UX</button>
            </div>

        <div className="card-list grid grid-cols-4 gap-4">
        {filterCourses.map((item,index)=>(
                <CourseCard key={item.id} item={item}/>
            )
        )}
        </div>
        </>
    )
}
export default CourseLists;