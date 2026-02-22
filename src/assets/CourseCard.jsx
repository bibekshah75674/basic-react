import { Link } from "react-router-dom"

export const CourseCard = ({item})=>{
    return(
        <>
            <div className="border p-4 rounded-lg shadow-md w-80 h-104 m-8 flex flex-col gap-1.5">
                <img src={item.image} alt=""/>
                <h2 className="font-bold bg-gray-300">{item.name}</h2>
                <p>{item.description}</p>
                <h3>Total Weeks:{item.totalWeeks}</h3>
                <h3 className="font-bold bg-green-100">Lessons:{item.lessons}</h3>
                <h2 className="font-bold bg-green-100">Instructor:{item.instructor}</h2>

                <Link to={`${item.id}?name=${item.name}&category=${item.category}`}><button className="bg-amber-200">Details about the course</button></Link>
                
            </div>
        </>
    )
}   
