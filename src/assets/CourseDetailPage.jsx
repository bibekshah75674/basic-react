import { useParams, useSearchParams } from "react-router-dom"
import { courses } from "./courses.js"
import { Link } from "react-router-dom";

export const CourseDetailPage = ()=>{
    const {id} = useParams();
    // console.log(id);
    // console.log(typeof id); //string

    // const [searchParams,setSearchParams] = useSearchParams()

    // const courseName = searchParams.get("name");
    // const courseCategory = searchParams.get("category");
    // console.log(courseName,courseCategory);
    // console.log(courseName);

    const mainCourses =  courses.find((item)=>(
        item.id === parseInt(id)
    ))
    console.log(mainCourses);   
    return(
        <>
        {/* <h1>This is detail page of course no {id}</h1> */}
        {/* <h1>The course id is {id}</h1>
        <h1>The course name is {courseName}</h1>
        <h1>The course category is {courseCategory}</h1> */}

        {/* <h1>{mainCourses.id}</h1>
        <h1>{mainCourses.name}</h1>
        <h1>{mainCourses.category}</h1> */}
        <div className="max-w-4xl mx-auto p-8">
      <img
        src={mainCourses.image}
        alt={mainCourses.name}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-6">
        {mainCourses.name}
      </h1>

      <p className="mt-4 text-gray-600">
        {mainCourses.fullDescription}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <p><strong>Instructor:</strong> {mainCourses.instructor}</p>
        <p><strong>Duration:</strong> {mainCourses.totalWeeks} Weeks</p>
        <p><strong>Lessons:</strong> {mainCourses.lessons}</p>
        <p><strong>Level:</strong> {mainCourses.level}</p>
        <p className="text-xl font-bold text-indigo-600">
          {mainCourses.price}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Course Syllabus
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          {mainCourses.syllabus.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>

      <div>
        <Link to="/courses">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Back to Courses
          </button>
        </Link>
      </div>
      
    </div>
        </>
    )
}   